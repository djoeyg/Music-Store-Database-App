import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function AvailableTrack({ aTrack }) {
    return (
        <>
          <tr>
              <td>{aTrack.trackID}</td>
              <td>{aTrack.trackTitle}</td>
              <td>{aTrack.trackLength}</td>
              <td>{aTrack.releaseDate}</td>
              <td><Link className="App-link" to="/order-tracks">Download</Link></td>
          </tr>
      </>
    );
}

export default AvailableTrack;
