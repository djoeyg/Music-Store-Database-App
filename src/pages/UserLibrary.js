import '../App.css';
import customerTracks from '../data/customerTracksData.js';
import CustomerPlayList from '../components/customerPlayList';
import NavBar from '../components/navBarLinks';
import React from 'react';

function UserLibrary({ customerToView }) {

  const idNum = customerToView.customerID - 1;
  const fName = customerToView.firstName;
  const lName = customerToView.lastName;

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>{fName} {lName}'s Music Tracks Library</h2>
        <div className="App-header">
            <CustomerPlayList playListTracks={customerTracks[idNum]}></CustomerPlayList>
        </div>
    </div>
    </>
  );
}

export default UserLibrary;