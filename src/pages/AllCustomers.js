import '../App.css';
import { useHistory } from 'react-router-dom';
import allCustomers from '../data/allCustomersData.js';
import AllCustomersList from '../components/allCustomersList';
import AddNewCustomer from '../components/addCustomer';
import NavBar from '../components/navBarLinks';
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
    <NavBar></NavBar>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
            <AddNewCustomer></AddNewCustomer>
            <AllCustomersList customersInfo={allCustomers} onUpdate={onUpdate} onView={onView}></AllCustomersList>
            <br></br>
        </div>
    </div>
    </>
  );
}

export default AllCustomers;