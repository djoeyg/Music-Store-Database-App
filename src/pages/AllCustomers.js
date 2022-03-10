import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*import allCustomers from '../data/allCustomersData.js';*/
import AllCustomersList from '../components/allCustomersList';
import NavBar from '../components/navBarLinks';

// Search Funcationality based on tutorial by 'Code with Voran':
// https://youtu.be/Z7AgNRbymT8

function AllCustomers({ setCustomerToEdit, setCustomerToView }) {

  const [searchTerm, setSearchTerm] = useState('');
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

  /*const searchCustomer = async _id => {
    const response = await fetch(`/api/get-customer/${_id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    const customerData = await response.json();
    setCustomers(customerData);
  };*/  

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
          <p>Search Customers by matching text</p>
          <span>
            <input type="text" 
                placeholder="Search..."
                onChange={e => {setSearchTerm(e.target.value)}}/>   
          </span>
          <br></br>
          <AllCustomersList customersInfo={allCustomers.filter(val => {
            if (searchTerm === '') {
              return val;
            } else if (
                val.customerFirstName.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerLastName.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerEmail.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerPhone.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerZip.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerID.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerStreet.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerCity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.customerState.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.ipAddress.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })}
              onUpdate={onUpdate} 
              onView={onView} 
              onDeleteCustomer={onDeleteCustomer}>
                </AllCustomersList>
          <br></br>
        </div>
    </div>
    </>
  );
}

export default AllCustomers;