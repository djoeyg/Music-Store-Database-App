import '../App.css';
import NavBar from '../components/navBarLinks';
import CustomerSelectFill from '../components/customerSelectFill';
import moment from 'moment';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function OrderForm() {

    const [customerID, setCustomerID] = useState('');
    const [orderDateTime, setOrderDateTime] = useState('');
    const [purchaseDateTime, setPurchaseDateTime] = useState('');
    const [orderComplete, setOrderComplete] = useState('');
    const [totalPurchase, setTotalPurchase] = useState('');
    const [creditCardNum, setCreditCardNum] = useState('');
    const [creditCardExp, setCreditCardExp] = useState('');

    const formValues = { customerID, creditCardNum, creditCardExp, orderComplete, totalPurchase };
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, SetFormErrors] = useState({});
    const history = useHistory();

    // Gets the current date & time
    // https://zetcode.com/javascript/momentjs/

    const formatedDateTime = () => {
        let newDateTime = new Date().toLocaleString();
        return moment(newDateTime).format("YYYY-MM-DD HH:mm:ss");
    };

    const addOrder = async () => {
        const newOrder = { customerID, orderDateTime, orderComplete, totalPurchase };
        const response = await fetch('/api/insert-order', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            /*alert("Order information successfully added");*/
            console.log(response.status);
        } else {
            alert(`Unable to add new order information, status code = ${response.status}`);
        }
    };

    const addPurchase = async () => {
        const newPurchase = { customerID, purchaseDateTime, totalPurchase, creditCardNum, creditCardExp};
        const response = await fetch('/api/insert-purchase', {
            method: 'POST',
            body: JSON.stringify(newPurchase),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            /*alert("Purchase information successfully added");*/
            console.log(response.status);
            history.push("/orders");
        } else {
            alert(`Unable to add new purchase information, status code = ${response.status}`);
        }
    };

    const validate = (values) => {

        // regex credit card expiration date validation:
        // https://stackoverflow.com/questions/39459673/regex-expiration-date-mm-yyyy

        // regex credit card number validation:
        // https://www.regular-expressions.info/creditcard.html#:~:text=The%20regex%20%5Cb%5Cd%7B,validating%20a%20single%20card%20number.
        
        const errors = {};
        const ccNumRegEx = /^\d{16}$/;
        const ccExpRegEx = /^(0[1-9]|10|11|12)\/20[0-9]{2}$/;
        
        if (!values.customerID) {
            errors.customer = "Required";
        }
        if (values.totalPurchase < 0 | values.totalPurchase > 9.99) {
            errors.invalidPrice = "Invalid Dollar Amount";
        }
        if (!values.creditCardNum) {
            errors.ccNum = "Required";
        } else if (!ccNumRegEx.test(values.creditCardNum)) {
            errors.invalidCcNum = "Invalid CC Number";
        }
        if (!values.creditCardExp) {
            errors.ccExp = "Required";
        } else if (!ccExpRegEx.test(values.creditCardExp)) {
            errors.invalidCcExp = "Invalid Expiration Date";
        }
        if (!values.orderComplete) {
            errors.complete = "Required";
        }
        return errors;
    };

    // Help with updating multiple state variables & function calls with an 'onchange event'.
    // https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
    // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately

    const orderSubmit = async (e) => {
        e.preventDefault();
        SetFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            addOrder();
            addPurchase();
            setIsSubmit(false);
        }
    };

    return (
        <>
        <NavBar></NavBar>
            <div className="body">
                <h2>Order &amp; Purchase Tracks for Download</h2>
                    <div className="App-header">
                        <p>Make entries for each field below.</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Select Customer:<p class="form-error">{formErrors.customer}</p></td>
                                    <td>
                                        <select class="fieldset"
                                        type="number"
                                        id="customer"
                                        value={customerID}
                                        onChange={e => {setCustomerID(e.target.value); 
                                                        setOrderDateTime(formatedDateTime);
                                                        setPurchaseDateTime(formatedDateTime);
                                                        }}>
                                        <option value=''>-- Select Customer --</option>
                                        <CustomerSelectFill />
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Purchase Amount:</td>
                                    <td>
                                        <input type="text" 
                                        value={totalPurchase}
                                        placeholder="$0.00"
                                        onChange={e => setTotalPurchase(e.target.value)}/>
                                        <p class="form-error">{formErrors.invalidPrice}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Credit Card Number:<p class="form-error">{formErrors.ccNum}</p></td>
                                    <td>
                                        <input type="text" 
                                        value={creditCardNum}
                                        placeholder="16 digit CC number"
                                        onChange={e => setCreditCardNum(e.target.value)}/>
                                        <p class="form-error">{formErrors.invalidCcNum}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Credit Card Exp Date:<p class="form-error">{formErrors.ccExp}</p></td>
                                    <td>
                                        <input type="text"
                                        value={creditCardExp} 
                                        placeholder="MM/YYYY"
                                        onChange={e => setCreditCardExp(e.target.value)}/>
                                        <p class="form-error">{formErrors.invalidCcExp}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Order Complete:<p class="form-error">{formErrors.complete}</p></td>
                                    <td><select 
                                        class="fieldset"
                                        type="number"
                                        id="orderComplete"
                                        value={orderComplete}
                                        onChange={e => setOrderComplete(e.target.value)}>
                                            <option value=''>-- Select --</option>
                                            <option value='0'>No</option>
                                            <option value='1'>Yes</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <button className='btn-grad'
                            onClick={orderSubmit}>Submit
                        </button>
                        <br></br>
                    </div>
                </div>
        </>
    );
}

export default OrderForm;

/*  <tr>
        <td>Customer ID#:</td>
        <td>
            <input type="text" 
            value={customerID}
            placeholder="ID value"
            onChange={e => {setCustomerID(e.target.value); 
                            setOrderDateTime(formatedDateTime);
                            setPurchaseDateTime(formatedDateTime);
                            setOrderComplete(1);}}/>
        </td>
    </tr> */