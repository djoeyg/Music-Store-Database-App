import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const UpdateCustomerInfo = ({ customerToEdit }) => {

    const _id = customerToEdit.customerID
    const [ipAddress, setIpAddress] = useState(customerToEdit.ipAddress);
    const [customerFirstName, setFirstName] = useState(customerToEdit.customerFirstName);
    const [customerLastName, setLastName] = useState(customerToEdit.customerLastName);
    const [customerStreet, setStreet] = useState(customerToEdit.customerStreet);
    const [customerCity, setCity] = useState(customerToEdit.customerCity);
    const [customerState, setState] = useState(customerToEdit.customerState);
    const [customerZip, setZipCode] = useState(customerToEdit.customerZip);
    const [customerEmail, setEmail] = useState(customerToEdit.customerEmail);
    const [customerPhone, setPhone] = useState(customerToEdit.customerPhone);
    
    const history = useHistory();

    const editCustomer = async () => {
        const editedCustomer = { ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone, _id};
        const response = await fetch(`/api/update-customer/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedCustomer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Customer information successfully updated");
        } else {
            alert(`Failed to update customer information, status code = ${response.status}`);
        }
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
                        <td>IP Address:</td>
                        <td><input
                                type="text"
                                value={ipAddress}
                                onChange={e => setIpAddress(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td><input
                                type="text"
                                value={customerFirstName}
                                onChange={e => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input
                                type="text"
                                value={customerLastName}
                                onChange={e => setLastName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Street:</td>
                        <td><input
                                type="text"
                                value={customerStreet}
                                onChange={e => setStreet(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td><input
                                type="text"
                                value={customerCity}
                                onChange={e => setCity(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td><input
                                type="text"
                                value={customerState}
                                onChange={e => setState(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Zip Code:</td>
                        <td><input
                                type="text"
                                value={customerZip}
                                onChange={e => setZipCode(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input
                                type="text"
                                value={customerEmail}
                                onChange={e => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td><input
                                type="text"
                                value={customerPhone}
                                onChange={e => setPhone(e.target.value)} /></td>
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