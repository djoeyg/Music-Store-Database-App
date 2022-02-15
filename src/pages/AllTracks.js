import '../App.css';
import { Link } from 'react-router-dom';
import allTracks from '../data/allTracksData.js';
import AllTracksList from '../components/allTracksList';
import React from 'react';

function AllTracks() {
  return (
    <>
    <div className="body">
        <h2>All Available Music Tracks</h2>
        <div className="App-header">
            <br></br>
            <AllTracksList availableTracks={allTracks}></AllTracksList>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default AllTracks;