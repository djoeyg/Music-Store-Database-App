import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const UpdateOrderInfo = ({ orderToEdit }) => {

    const [customerID, setCustomerID] = useState(orderToEdit.customerID);
    const [orderDateTime, setOrderDateTime] = useState(orderToEdit.orderDateTime);
    const [complete, setComplete] = useState(orderToEdit.orderComplete);

    const history = useHistory();

    const editOrder = async () => {
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
        history.push("/orders");
    };

    return (
      <div className="body">
        <h1>Update Order Information</h1>
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
                        <td>Order Date &amp; TIme:</td>
                        <td><input
                                type="text"
                                value={orderDateTime}
                                onChange={e => setOrderDateTime(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Order Complete:</td>
                        <td><input
                                type="text"
                                value={complete}
                                onChange={e => setComplete(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editOrder}>Save Changes to Order
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/orders">Cancel and Return to Orders Page</Link>
      </div>
    );
}

export default UpdateOrderInfo;