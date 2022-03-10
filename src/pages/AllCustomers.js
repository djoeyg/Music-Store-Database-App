import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*import allCustomers from '../data/allCustomersData.js';*/
import AllCustomersList from '../components/allCustomersList';
/*import AddNewCustomer from '../components/addCustomer';*/
import NavBar from '../components/navBarLinks';


function AllCustomers({ setCustomerToEdit, setCustomerToView }) {

  const [allCustomers, setCustomers] = useState([]);
  const history = useHistory();

  const onDeleteCustomer = async _id => {
    const response = await fetch(`/api/delete-customer/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Customer with _id = ${_id}, status code = ${response.status}`);
      }
    loadCustomers();
  };

  const onUpdate = customerToEdit => {
    setCustomerToEdit(customerToEdit);
    history.push("/update-customer");
  };

  const onView = customerToView => {
    setCustomerToView(customerToView);
    history.push("/user-library");
  };

  const loadCustomers = async () => {
    const response = await fetch('/api/get-customers', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
      loadCustomers();
  }, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
        <Link className="Body-link" to="/new-customer">Add / Insert a new Customer</Link>
          <p>Search Customer by ID#</p>
          <span>
            <input type="text" placeholder="Customer ID#" />   
            <button onClick={e => e.preventDefault()}>Search</button>
          </span>
          <br></br>
          <AllCustomersList customersInfo={allCustomers} onUpdate={onUpdate} onView={onView} onDeleteCustomer={onDeleteCustomer}></AllCustomersList>
          <br></br>
        </div>
    </div>
    </>
  );
}

export default AllCustomers;