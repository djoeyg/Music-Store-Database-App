import React, { useState } from 'react';

function AddNewCustomer() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    const addCustomer = async () => {
        /*const newRecipe = { _id, title, imgUrl, directions, description, rating, notes, ideas, ingredients, prepTime, cookTime, totalTime };
        const response = await fetch('/recipes', {
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the new recipe");
        } else {
            alert(`Failed to add recipe, status code = ${response.status}`);
        }*/
    };

    return (
        <div>
            <h4>Insert New Customer Information</h4>
            <input
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)} />
            
            <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={e => setLastName(e.target.value)} />
            
            <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)} />

            <input
                type="text"
                value={street}
                placeholder="Number &amp; Street"
                onChange={e => setStreet(e.target.value)} />

            <br></br>
            
            <input
                type="text"
                value={city}
                placeholder="City"
                onChange={e => setCity(e.target.value)} />

            <input
                type="text"
                value={state}
                placeholder="State"
                onChange={e => setState(e.target.value)} />

            <input
                type="text"
                value={zipCode}
                placeholder="Zip Code"
                onChange={e => setZipCode(e.target.value)} /> 

            <input
                type="text"
                value={phone}
                placeholder="Phone Number"
                onChange={e => setPhone(e.target.value)} />

            <input
                type="text"
                value={ipAddress}
                placeholder="IP Address"
                onChange={e => setIpAddress(e.target.value)} />

            <br></br>

            <button
                onClick={addCustomer}
            >Add to Customers</button>
            <br></br><br></br>
        </div>
    );
}

export default AddNewCustomer;