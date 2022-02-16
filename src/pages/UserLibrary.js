import '../App.css';
import { Link } from 'react-router-dom';
import customerTracks from '../data/customerTracksData.js';
import CustomerPlayList from '../components/customerPlayList';
import React from 'react';

function UserLibrary({ customerToView }) {

  const idNum = customerToView.customerID - 1;
  const fName = customerToView.firstName;
  const lName = customerToView.lastName;

  return (
    <>
    <div className="body">
        <h2>{fName} {lName}'s Music Tracks Library</h2>
        <div className="App-header">
            <CustomerPlayList playListTracks={customerTracks[idNum]}></CustomerPlayList>
        </div>
        <Link className="App-link" to="/all-customers">Return to Customers List</Link>
        <Link className="App-link" to="/">Return to Home Page</Link>
    </div>
    </>
  );
}

export default UserLibrary;