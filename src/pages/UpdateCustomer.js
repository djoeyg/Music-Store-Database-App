import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// form validation technique from 'React Forms Handling & Validation Tutorial':
// https://youtu.be/EYpdEYK25Dc

// regex email validation:
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

// regex phone number validation:
// https://stackoverflow.com/questions/31143315/regex-phone-number-with-dashes

// regex zip code validation:
// https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation

// regex ip address validation:
// https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses

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
    
    const formValues = { ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone };
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, SetFormErrors] = useState({});
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
            /*alert("Customer information successfully updated");*/
            history.push("/all-customers");
            console.log(response.status);
        } else {
            alert(`Unable to update customer information, status code = ${response.status}`);
        }
    };

    const validate = (values) => {
        const errors = {};
        const ipRegEx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegEx = /^(1-)?\d{3}-\d{3}-\d{4}$/;
        const zipRegEx = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

        if (!values.customerFirstName) {
            errors.firstName = "Required";
        }
        if (!values.customerLastName) {
            errors.lastName = "Required";
        }
        if (!values.customerStreet) {
            errors.street = "Required";
        }
        if (!values.customerCity) {
            errors.city = "Required";
        }
        if (!values.customerState) {
            errors.state = "Required";
        }
        if (!values.customerZip) {
            errors.noZipCode = "Required";
        } else if (!zipRegEx.test(values.customerZip)) {
            errors.invalidZipCode = "Invalid Zip Code";
        }
        if (!values.customerPhone) {
            errors.noPhone = "Required";
        } else if (!phoneRegEx.test(values.customerPhone)) {
            errors.invalidPhone = "Invalid Phone Number";
        }
        if (!values.customerEmail) {
            errors.noEmail = "Required";
        } else if (!emailRegEx.test(values.customerEmail)) {
            errors.invalidEmail = "Invalid Email format";
        }
        if (!values.ipAddress) {
            errors.ipAddress = "Required";
        } else if (!ipRegEx.test(values.ipAddress)) {
            errors.invalidIpAddress = "Invalid IP Address";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        SetFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            editCustomer();
            setIsSubmit(false);
        }
    }

    return (
      <div className="body">
        <h1>Update Customer Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>First Name:<p class="form-error">{formErrors.firstName}</p></td>
                        <td><input
                                type="text"
                                value={customerFirstName}
                                onChange={e => setFirstName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name:<p class="form-error">{formErrors.lastName}</p></td>
                        <td><input
                                type="text"
                                value={customerLastName}
                                onChange={e => setLastName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Street:<p class="form-error">{formErrors.street}</p></td>
                        <td><input
                                type="text"
                                value={customerStreet}
                                onChange={e => setStreet(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>City:<p class="form-error">{formErrors.city}</p></td>
                        <td><input
                                type="text"
                                value={customerCity}
                                onChange={e => setCity(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>State:<p class="form-error">{formErrors.state}</p></td>
                        <td>
                            <select class="fieldset" value={customerState} onChange={e => setState(e.target.value)}>
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
                        <td>Zip Code:<p class="form-error">{formErrors.noZipCode}</p></td>
                        <td><input
                                type="text"
                                value={customerZip}
                                onChange={e => setZipCode(e.target.value)} />
                            <p class="form-error">{formErrors.invalidZipCode}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number:<p class="form-error">{formErrors.noPhone}</p></td>
                        <td><input
                                type="text"
                                value={customerPhone}
                                onChange={e => setPhone(e.target.value)} />
                            <p class="form-error">{formErrors.invalidPhone}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Email:<p class="form-error">{formErrors.noEmail}</p></td>
                        <td><input
                                type="text"
                                value={customerEmail}
                                onChange={e => setEmail(e.target.value)} />
                            <p class="form-error">{formErrors.invalidEmail}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>IP Address:<p class="form-error">{formErrors.ipAddress}</p></td>
                        <td><input
                                type="text"
                                value={ipAddress}
                                onChange={e => setIpAddress(e.target.value)} />
                            <p class="form-error">{formErrors.invalidIpAddress}</p>
                        </td>
                    </tr>
                </tbody>
            </table> 
            <br></br>
            <button
                onClick={handleSubmit}>Save Changes to Customer
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/all-customers">Cancel and Return to Customers Page</Link>
      </div>
    );
}

export default UpdateCustomerInfo;