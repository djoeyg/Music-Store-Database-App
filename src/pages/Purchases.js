import '../App.css';
import { Link } from 'react-router-dom';
import allTracks from '../data/allTracksData.js';
import AllTracksList from '../components/allTracksList';
import AddNewTrack from '../components/addTrack';
import React from 'react';

function Purchases() {
  return (
    <>
    <div className="body">
        <h2>All Available Music Tracks</h2>
        <div className="App-header">
            <AddNewTrack></AddNewTrack>
            <AllTracksList availableTracks={allTracks}></AllTracksList>
            <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default Purchases;