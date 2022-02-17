import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

function OrderForm() {
  return (
    <>
    <div className="body">
        <h2>Purchase Tracks for Download</h2>
            <div className="App-header">
                <p>Make entries for each field below.</p>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Track Title:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Retail Price:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Date &amp; Time:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Credit Card Number:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Credit Card Exp Date:</td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <button className='button'
                    onClick={e => {
                  alert('Track has been purchased.\nDownlaod will begin momentarily.\nThank you for your business!');
                  e.preventDefault();
                  }}>Submit
                </button>
                <br></br>
            </div>
        <Link className="App-link" to="/all-tracks">Return to Tracks</Link>
        <Link className="App-link" to="/orders">Return to Orders</Link>
        <Link className="App-link" to="/">Return to Home Page</Link>
    </div>
    </>
  );
}

export default OrderForm;