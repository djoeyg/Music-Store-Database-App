import React, { useState } from 'react';

function AddNewCustomer() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');

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
            <p>Make entries for each field below.</p>
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
            
            <button
                onClick={addCustomer}
            >Add to Customers List</button>
            <br></br><br></br>
        </div>
    );
}

export default AddNewCustomer;