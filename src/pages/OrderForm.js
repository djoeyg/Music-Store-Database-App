import '../App.css';
import NavBar from '../components/navBarLinks';
import React from 'react';

function OrderForm() {
  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>Order &amp; Purchase Tracks for Download</h2>
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
                  alert('Track has been purchased.\nOrder will be completed momentarily.');
                  e.preventDefault();
                  }}>Submit
                </button>
                <br></br>
            </div>
    </div>
    </>
  );
}

export default OrderForm;