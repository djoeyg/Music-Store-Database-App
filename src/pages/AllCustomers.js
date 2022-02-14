import '../App.css';
import { Link } from 'react-router-dom';
import allCustomers from '../data/allCustomersData.js';
import AllCustomersList from '../components/allCustomersList';
import React from 'react';

function AllCustomers() {
  return (
    <>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
            <br></br>
            <AllCustomersList customersInfo={allCustomers}></AllCustomersList>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default AllCustomers;