import '../App.css';
import NavBar from '../components/navBarLinks';
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

    const history = useHistory();

    // Gets the current date & time
    // https://zetcode.com/javascript/momentjs/

    const formatedDateTime = () => {
        let newDateTime = new Date().toLocaleString();
        return moment(newDateTime).format("YYYY-MM-DD HH:mm:ss");
    };

    const addOrder = async () => {
        const newOrder = { customerID, orderDateTime, orderComplete };
        const response = await fetch('/api/insert-order', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            /*alert("Successfully added the new order information");*/
        } else {
            alert(`Failed to add new order, status code = ${response.status}`);
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
            /*alert("Successfully added the new purchase information");*/
        } else {
            alert(`Failed to add new purchase, status code = ${response.status}`);
        }
    };

    // Help with updating multiple state variables & function calls with an 'onchange event'.
    // https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
    // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately

    const orderSubmit = async () => {
        addOrder();
        addPurchase();
        history.push("/orders");
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
                                </tr>
                                <tr>
                                    <td>Total Purchase Amout:</td>
                                    <td>
                                        <input type="text" 
                                        value={totalPurchase}
                                        placeholder="Total Purchase"
                                        onChange={e => setTotalPurchase(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Credit Card Number:</td>
                                    <td>
                                        <input type="text" 
                                        value={creditCardNum}
                                        placeholder="16 digit CC number"
                                        onChange={e => setCreditCardNum(e.target.value)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Credit Card Exp Date:</td>
                                    <td>
                                        <input type="text"
                                        value={creditCardExp} 
                                        placeholder="MM / YYYY"
                                        onChange={e => setCreditCardExp(e.target.value)}/>
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