import '../App.css';
import { Link } from 'react-router-dom';
import allTracks from '../data/allTracksData.js';
import AllTracksList from '../components/allTracksList';
import React from 'react';

function Orders() {
  return (
    <>
    <div className="body">
        <h2>Manage Orders Data</h2>
        <div className="App-header">
        <Link className="App-link" to="/order-tracks">Add new Order</Link>
        <br></br>
        <AllTracksList availableTracks={allTracks}></AllTracksList>
        <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default Orders;