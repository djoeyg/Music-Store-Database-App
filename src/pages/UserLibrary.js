import '../App.css';
import { Link } from 'react-router-dom';
import customerTracks from '../data/customerTracksData.js';
import CustomerPlayList from '../components/customerPlayList';
import React from 'react';

function UserLibrary() {
  return (
    <>
    <div className="body">
        <h2>Your Music Tracks Library</h2>
        <div className="App-header">
            <CustomerPlayList playListTracks={customerTracks}></CustomerPlayList>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default UserLibrary;