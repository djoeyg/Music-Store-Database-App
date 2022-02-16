import '../App.css';
import { Link } from 'react-router-dom';
import allCustomers from '../data/allCustomersData.js';
import AllCustomersList from '../components/allCustomersList';
import AddNewCustomer from '../components/addCustomer';
import { useHistory } from 'react-router-dom';
import React from 'react';

function AllCustomers({ setCustomerToEdit }) {

  const history = useHistory();

  const onUpdate = customerToEdit => {
    setCustomerToEdit(customerToEdit);
    history.push("/update-customer");
  }

  return (
    <>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
            <AddNewCustomer></AddNewCustomer>
            <AllCustomersList customersInfo={allCustomers} onUpdate={onUpdate}></AllCustomersList>
            <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default AllCustomers;