import '../App.css';
import NavBar from '../components/navBarLinks';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// 50 States dropdown select data from:
// https://www.freeformatter.com/usa-state-list-html-select.html

function InsertCustomer() {

    const [ipAddress, setIpAddress] = useState('');
    const [customerFirstName, setFirstName] = useState('');
    const [customerLastName, setLastName] = useState('')
    const [customerStreet, setStreet] = useState('');
    const [customerCity, setCity] = useState('');
    const [customerState, setState] = useState('');
    const [customerZip, setZipCode] = useState('');
    const [customerEmail, setEmail] = useState('');
    const [customerPhone, setPhone] = useState('');

    const history = useHistory();

    const addCustomer = async () => {
        const newCustomer = { ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone };
        const response = await fetch('/api/insert-customer', {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status !== 200) {
            alert(`Failed to add new customer information, status code = ${response.status}`);
          }
        history.push("/all-customers");
    };  

    return (
        <>
        <NavBar></NavBar>
            <div className="body">
                <h2>Insert New Customer Information</h2>
                    <div className="App-header">
                        <p>Make entries for each field below.</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>First Name:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerFirstName}
                                            placeholder="First Name"
                                            onChange={e => setFirstName(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Last Name:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerLastName}
                                            placeholder="Last Name"
                                            onChange={e => setLastName(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Street:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerStreet}
                                            placeholder="Number &amp; Street"
                                            onChange={e => setStreet(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerCity}
                                            placeholder="City"
                                            onChange={e => setCity(e.target.value)} />
                                    </td>
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
                                    <td>
                                        <input
                                            type="text"
                                            value={customerZip}
                                            placeholder="Zip Code"
                                            onChange={e => setZipCode(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerPhone}
                                            placeholder="Phone Number"
                                            onChange={e => setPhone(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={customerEmail}
                                            placeholder="Email"
                                            onChange={e => setEmail(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>IP Address:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={ipAddress}
                                            placeholder="IP Address"
                                            onChange={e => setIpAddress(e.target.value)} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <button className='btn-grad'
                            onClick={addCustomer}>Submit
                        </button>
                        <br></br>
                    </div>
                </div>
        </>
    );
};

export default InsertCustomer;
