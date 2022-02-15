import React, { useState } from 'react';

function AddNewTrack() {

    const [trackTitle, setTrackTitle] = useState('');
    const [trackLength, setTrackLength] = useState('')
    const [releaseDate, setReleaseDate] = useState('');

    /*trackID}</td>
              <td>{aTrack.trackTitle}</td>
              <td>{aTrack.trackLength}</td>
              <td>{aTrack.releaseDate*/


    const addTrack = async () => {
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
            <h4>Insert New Track Information</h4>
            <p>Make entries for each field below.</p>
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
                value={releaseDate}
                placeholder="Release Date"
                onChange={e => setReleaseDate(e.target.value)} />
            
            <button
                onClick={addTrack}
            >Add to Tracks List</button>
            <br></br><br></br>
        </div>
    );
}

export default AddNewTrack;