import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const UpdateCustomerInfo = ({ customerToEdit }) => {

    const [firstName, setFIrstName] = useState(customerToEdit.firstName);
    const [lastName, setLastName] = useState(customerToEdit.lastName);
    const [email, setEmail] = useState(customerToEdit.email);

    const history = useHistory();

    const editCustomer = async () => {
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
        history.push("/all-customers");
    };

    return (
      <div className="body">
        <h1>Update Customer Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input
                                type="text"
                                value={firstName}
                                onChange={e => setFIrstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input
                                type="text"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editCustomer}>Save Changes to Customer
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/all-customers">Cancel and Return to Customers Page</Link>
      </div>
    );
}

export default UpdateCustomerInfo;