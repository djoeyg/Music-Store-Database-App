import { React, useEffect } from 'react';
import { useState } from 'react';

function TrackSelectFill() {

    const [allTracks, setTracks] = useState([]);

    const loadTracks = async () => {
        const response = await fetch('/api/get-tracks', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        setTracks(data);
      };
    
    useEffect(() => {
        loadTracks();
    }, []);

    return (
        <>
            {allTracks.map((track, key) => (<option value={track.trackID} id={key}>{track.trackTitle} </option>))}
        </>
    );
};

export default TrackSelectFill;