import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import CustomerSelectFill from '../components/customerSelectFill';

export const UpdatePurchaseInfo = ({ purchaseToEdit }) => {

    const _id = purchaseToEdit.purchaseID
    const originalDateTime = purchaseToEdit.purchaseDateTime

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDateTime = moment(originalDateTime).format("YYYY-MM-DD HH:mm:ss");

    const [customerID, setCustomerID] = useState(purchaseToEdit.customerID);
    const [purchaseDateTime, setPurchaseDateTime] = useState(formatedDateTime);
    const [totalPurchase, setTotalPurchase] = useState(purchaseToEdit.totalPurchase);
    const [creditCardNum, setCreditCardNum] = useState(purchaseToEdit.creditCardNum);
    const [creditCardExp, setCreditCardExp] = useState(purchaseToEdit.creditCardExp);

    const formValues = { creditCardNum, creditCardExp, purchaseDateTime, totalPurchase };
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, SetFormErrors] = useState({});
    const [customer, setCustomer] = useState([]);
    const history = useHistory();

    const editPurchase = async () => {
        const editedPurchase = { customerID, purchaseDateTime, totalPurchase, creditCardNum, creditCardExp, _id };
        const response = await fetch(`/api/update-purchase/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedPurchase),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.status === 200) {
            /*alert("Purchase information successfully updated");*/
            history.push("/purchases");
        } else {
            alert(`Unable to update purchase information, status code = ${response.status}`);
        }
    };
    
    const searchCustomer = async inputID => {
        const _id = inputID
        const response = await fetch(`/api/get-customer/${_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const customer = await response.json();
        setCustomer(customer);
    };

    useEffect(() => {
        searchCustomer(customerID);
        console.log(customer);
    });

    const validate = (values) => {

        // regex date & time validation:
        // https://regexlib.com/REDetails.aspx?regexp_id=1824

        // regex credit card expiration date validation:
        // https://stackoverflow.com/questions/39459673/regex-expiration-date-mm-yyyy

        // regex credit card number validation:
        // https://www.regular-expressions.info/creditcard.html#:~:text=The%20regex%20%5Cb%5Cd%7B,validating%20a%20single%20card%20number.
        
        const errors = {};
        const ccNumRegEx = /^\d{16}$/;
        const ccExpRegEx = /^(0[1-9]|10|11|12)\/20[0-9]{2}$/;
        const dateTimeRegEx = /^([0-9]{4})-([0-1][0-9])-([0-3][0-9])\s([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/;
        
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
        if (!values.purchaseDateTime) {
            errors.dateTime = "Required";
        } else if (!dateTimeRegEx.test(values.purchaseDateTime)) {
            errors.invalidDateTime = "Invalid Date or Time";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SetFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            editPurchase();
            setIsSubmit(false);
        };
    };
    return (
      <div className="body">
        <h1>Update Purchase Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Customer:</td>
                        <td><select 
                                class="fieldset"
                                type="number"
                                id="customer"
                                value={customerID}
                                onChange={e => setCustomerID(e.target.value)}>
                                <CustomerSelectFill />
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Purchase Date &amp; TIme:<p class="form-error">{formErrors.dateTime}</p></td>
                        <td><input
                                type="text"
                                value={purchaseDateTime}
                                onChange={e => setPurchaseDateTime(e.target.value)} />
                            <p class="form-error">{formErrors.invalidDateTime}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Total Purchase:</td>
                        <td><input
                                type="text"
                                value={totalPurchase}
                                onChange={e => setTotalPurchase(e.target.value)} />
                            <p class="form-error">{formErrors.invalidPrice}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Credit Card Number:<p class="form-error">{formErrors.ccNum}</p></td>
                        <td><input
                                type="text"
                                value={creditCardNum}
                                onChange={e => setCreditCardNum(e.target.value)} />
                            <p class="form-error">{formErrors.invalidCcNum}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Credit Card Expiration Date:<p class="form-error">{formErrors.ccExp}</p></td>
                        <td><input
                                type="text"
                                value={creditCardExp}
                                onChange={e => setCreditCardExp(e.target.value)} />
                            <p class="form-error">{formErrors.invalidCcExp}</p>
                        </td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={handleSubmit}>Save Changes to Purchase
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/purchases">Cancel and Return to Purchases Page</Link>
      </div>
    );
}

export default UpdatePurchaseInfo;