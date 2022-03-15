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
            alert("Purchase information successfully updated");
        } else {
            alert(`Failed to update purchase information, status code = ${response.status}`);
        }
        history.push("/purchases");
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

    return (
      <div className="body">
        <h1>Update Purchase Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Customer:</td>
                        <td><select class="fieldset"
                                        type="number"
                                        id="customer"
                                        value={customerID}
                                        onChange={e => setCustomerID(e.target.value)}>
                                        <CustomerSelectFill />
                                        </select></td>
                    </tr>
                    <tr>
                        <td>Purchase Date &amp; TIme:</td>
                        <td><input
                                type="text"
                                value={purchaseDateTime}
                                onChange={e => setPurchaseDateTime(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Total Purchase:</td>
                        <td><input
                                type="text"
                                value={totalPurchase}
                                onChange={e => setTotalPurchase(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Credit Card Number:</td>
                        <td><input
                                type="text"
                                value={creditCardNum}
                                onChange={e => setCreditCardNum(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Credit Card Expiration Date:</td>
                        <td><input
                                type="text"
                                value={creditCardExp}
                                onChange={e => setCreditCardExp(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editPurchase}>Save Changes to Purchase
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/purchases">Cancel and Return to Purchases Page</Link>
      </div>
    );
}

export default UpdatePurchaseInfo;