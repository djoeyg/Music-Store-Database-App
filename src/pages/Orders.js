import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

function UserLibrary() {
  return (
    <>
    <div className="body">
        <h2>Purchase Tracks for Download</h2>
            <div className="App-header">
                <p>Make entries for each field below.
                <br></br>
                First Name :
                <input
                    type="text"/>
                <br></br>
                Last Name :
                <input
                    type="text"/>
                <br></br>
                Track Title :
                <input
                    type="text"/>
                <br></br>
                Credit Card Number :</p>
                <input
                    type="text"/>
            
                <p>Credit Card Expiration Date :</p>
                <input
                    type="text"/>
                <br></br>
                <button className='button'
                    onClick={e => {
                  alert('Track has been purchased.\nDownlaod will begin momentarily.\nThank you for your business!');
                  e.preventDefault();
                  }}>Submit
                </button>
                <br></br>
            </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default UserLibrary;