import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// 50 States dropdown select data from:
// https://www.freeformatter.com/usa-state-list-html-select.html

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
                        <td>
                            <select class="fieldset" value={customerState} placeholder="State" onChange={e => setState(e.target.value)}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </td>
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