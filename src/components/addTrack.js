import React, { useState } from 'react';

function AddNewTrack() {

    const [trackTitle, setTrackTitle] = useState('');
    const [trackLength, setTrackLength] = useState('');
    const [retailPrice, setRetailPrice] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const addTrack = async () => {
        const newTrack = { trackTitle, trackLength, retailPrice, releaseDate };
        const response = await fetch('/api/insert-track', {
            method: 'POST',
            body: JSON.stringify(newTrack),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the new track information");
        } else {
            alert(`Failed to add new track, status code = ${response.status}`);
        }
    };

    return (
        <div>
            <h4>Insert Information for New Track </h4>
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
                placeholder="Price"
                onChange={e => setRetailPrice(e.target.value)} />    

            <input
                type="text"
                value={releaseDate}
                placeholder="Release Date"
                onChange={e => setReleaseDate(e.target.value)} />
            
            <button
                onClick={addTrack}
            >Add to Tracks</button>
            <br></br><br></br>
        </div>
    );
}

export default AddNewTrack;