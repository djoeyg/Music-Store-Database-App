import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const UpdatePurchaseInfo = ({ purchaseToEdit }) => {

    const [customerID, setCustomerID] = useState(purchaseToEdit.customerID);
    const [purchaseDateTime, setPurchaseDateTime] = useState(purchaseToEdit.purchaseDateTime);
    const [totalPurchase, setTotalPurchase] = useState(purchaseToEdit.totalPurchase);
    const [creditCardNum, setCreditCardNum] = useState(purchaseToEdit.creditCardNum);
    const [creditCardExp, setCreditCardExp] = useState(purchaseToEdit.creditCardExp);

    const history = useHistory();

    const editPurchase = async () => {
        /*const editedRecipe = { _id, title, imgUrl, directions, description, rating, notes, ideas, ingredients, prepTime, cookTime, totalTime };
        const response = await fetch(`/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Customer successfully updated");
        } else {
            alert(`Failed to update customer, status code = ${response.status}`);
        }*/
        history.push("/purchases");
    };

    return (
      <div className="body">
        <h1>Update Purchase Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Customer ID#:</td>
                        <td><input
                                type="text"
                                value={customerID}
                                onChange={e => setCustomerID(e.target.value)} /></td>
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