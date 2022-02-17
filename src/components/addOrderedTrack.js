import React, { useState } from 'react';

function AddNewOrderedTrack() {

    const [orderID, setOrderID] = useState('');
    const [orderComplete, setOrderComplete] = useState('')
    const [dateTime, setDateTime] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [trackID, setTrackID] = useState('');
    const [trackTitle, setTrackTitle] = useState('');
    const [trackLength, setTrackLength] = useState('');
    const [retailPrice, setRetailPrice] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const AddOrderedTrack = async () => {
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
            <h4>Insert New Ordered Track Information</h4>
            <input
                type="text"
                value={orderID}
                placeholder="Order ID#"
                onChange={e => setOrderID(e.target.value)} />
            
            <input
                type="text"
                value={orderComplete}
                placeholder="Order Complete?"
                onChange={e => setOrderComplete(e.target.value)} />
            
            <input
                type="text"
                value={dateTime}
                placeholder="Date &amp; Time"
                onChange={e => setDateTime(e.target.value)} />

            <input
                type="text"
                value={customerID}
                placeholder="Customer ID#"
                onChange={e => setCustomerID(e.target.value)} />

            <br></br>
            
            <input
                type="text"
                value={trackID}
                placeholder="Track ID#"
                onChange={e => setTrackID(e.target.value)} />

            <input
                type="text"
                value={trackTitle}
                placeholder="Track Title"
                onChange={e => setTrackTitle(e.target.value)} />

            <input
                type="text"
                value={trackLength}
                placeholder="Track Length"
                onChange={e => setTrackLength(e.target.value)} /> 

            <input
                type="text"
                value={retailPrice}
                placeholder="Retail Price"
                onChange={e => setRetailPrice(e.target.value)} />

            <input
                type="text"
                value={releaseDate}
                placeholder="Release Date"
                onChange={e => setReleaseDate(e.target.value)} />

            <br></br>

            <button
                onClick={AddOrderedTrack}
            >Add to Ordered Tracks</button>
            <br></br><br></br>
        </div>
    );
}

export default AddNewOrderedTrack;