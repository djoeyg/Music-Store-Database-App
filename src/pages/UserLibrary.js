import '../App.css';
/*import customerTracks from '../data/customerTracksData.js';*/
import { useState, useEffect } from 'react';
import CustomerPlayList from '../components/customerPlayList';
import NavBar from '../components/navBarLinks';
import React from 'react';

function UserLibrary({ customerToView }) {

  const _id = customerToView.customerID;
  const fName = customerToView.customerFirstName;
  const lName = customerToView.customerLastName;
  const [customerTracks, setCustomerTracks] = useState([]);

  const onDeleteOrderedTrack = async (delID, custID) => {
    const _id = delID;
    const response = await fetch(`/api/delete-ordered-track/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Ordered Track with _id = ${_id}, status code = ${response.status}`);
      }
    loadCustomerTracks(custID);
  };

  const loadCustomerTracks = async custID => {
    const _id = custID;
    const response = await fetch(`/api/get-customer-tracks/${_id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setCustomerTracks(data);
  };

  useEffect(() => {
    loadCustomerTracks(_id);
  }, [_id]);

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>{fName} {lName}'s Music Tracks Library</h2>
        <div className="App-header">
            <CustomerPlayList playListTracks={customerTracks} onDeleteOrderedTrack={onDeleteOrderedTrack}></CustomerPlayList>
        </div>
    </div>
    </>
  );
}

export default UserLibrary;