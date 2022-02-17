import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const UpdateCustomerInfo = ({ customerToEdit }) => {

    const [firstName, setFIrstName] = useState(customerToEdit.firstName);
    const [lastName, setLastName] = useState(customerToEdit.lastName);
    const [email, setEmail] = useState(customerToEdit.email);
    const [street, setStreet] = useState(customerToEdit.street);
    const [city, setCity] = useState(customerToEdit.city);
    const [state, setState] = useState(customerToEdit.state);
    const [zipCode, setZipCode] = useState(customerToEdit.zipCode);
    const [phone, setPhone] = useState(customerToEdit.phone);
    const [ipAddress, setIpAddress] = useState(customerToEdit.ipAddress);

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
                    <tr>
                        <td>Street:</td>
                        <td><input
                                type="text"
                                value={street}
                                onChange={e => setStreet(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td><input
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td><input
                                type="text"
                                value={state}
                                onChange={e => setState(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Zip Code:</td>
                        <td><input
                                type="text"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td><input
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>IP Address:</td>
                        <td><input
                                type="text"
                                value={ipAddress}
                                onChange={e => setIpAddress(e.target.value)} /></td>
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