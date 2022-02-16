import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import allCustomers from '../data/allCustomersData.js';
import AllCustomersList from '../components/allCustomersList';
import AddNewCustomer from '../components/addCustomer';
import React from 'react';

function AllCustomers({ setCustomerToEdit, setCustomerToView }) {

  const history = useHistory();

  const onUpdate = customerToEdit => {
    setCustomerToEdit(customerToEdit);
    history.push("/update-customer");
  }

  const onView = customerToView => {
    setCustomerToView(customerToView);
    history.push("/user-library");
  }

  return (
    <>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
            <AddNewCustomer></AddNewCustomer>
            <AllCustomersList customersInfo={allCustomers} onUpdate={onUpdate} onView={onView}></AllCustomersList>
            <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default AllCustomers;