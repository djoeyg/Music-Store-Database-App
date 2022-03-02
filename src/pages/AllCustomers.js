import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/*import allCustomers from '../data/allCustomersData.js';*/
import AllCustomersList from '../components/allCustomersList';
/*import AddNewCustomer from '../components/addCustomer';*/
import NavBar from '../components/navBarLinks';


function AllCustomers({ setCustomerToEdit, setCustomerToView }) {

  const [ipAddress, setIpAddress] = useState('');
  const [customerFirstName, setFirstName] = useState('');
  const [customerLastName, setLastName] = useState('')
  const [customerStreet, setStreet] = useState('');
  const [customerCity, setCity] = useState('');
  const [customerState, setState] = useState('');
  const [customerZip, setZipCode] = useState('');
  const [customerEmail, setEmail] = useState('');
  const [customerPhone, setPhone] = useState('');

  const [allCustomers, setCustomers] = useState([]);
  const history = useHistory();

  const addCustomer = async () => {
    const newCustomer = { ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone };
    const response = await fetch('/api/insert-customer', {
        method: 'POST',
        body: JSON.stringify(newCustomer),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.status !== 200) {
        alert(`Failed to add new customer information, status code = ${response.status}`);
      }
    loadCustomers();
  };

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
  }

  const onView = customerToView => {
    setCustomerToView(customerToView);
    history.push("/user-library");
  }

  const loadCustomers = async () => {
    const response = await fetch('/api/get-customers', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setCustomers(data);
}

useEffect(() => {
    loadCustomers();
}, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>All Registered Customers</h2>
        <div className="App-header">
          <p>Search Customer by ID#</p>
          <span>
            <input type="text" placeholder="Customer ID#" />   
            <button onClick={e => e.preventDefault()}>Search</button>
          </span>
          <div>
            <h4>Insert New Customer Information</h4>
            <input
                type="text"
                value={customerFirstName}
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)} />
            
            <input
                type="text"
                value={customerLastName}
                placeholder="Last Name"
                onChange={e => setLastName(e.target.value)} />
            
            <input
                type="text"
                value={customerEmail}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)} />

            <input
                type="text"
                value={customerStreet}
                placeholder="Number &amp; Street"
                onChange={e => setStreet(e.target.value)} />

            <br></br>
            
            <input
                type="text"
                value={customerCity}
                placeholder="City"
                onChange={e => setCity(e.target.value)} />

            <input
                type="text"
                value={customerState}
                placeholder="State"
                onChange={e => setState(e.target.value)} />

            <input
                type="text"
                value={customerZip}
                placeholder="Zip Code"
                onChange={e => setZipCode(e.target.value)} /> 

            <input
                type="text"
                value={customerPhone}
                placeholder="Phone Number"
                onChange={e => setPhone(e.target.value)} />

            <input
                type="text"
                value={ipAddress}
                placeholder="IP Address"
                onChange={e => setIpAddress(e.target.value)} />

            <br></br>

            <button
                onClick={addCustomer}
            >Add to Customers</button>
            <br></br><br></br>
        </div>
              <AllCustomersList customersInfo={allCustomers} onUpdate={onUpdate} onView={onView} onDeleteCustomer={onDeleteCustomer}></AllCustomersList>
          <br></br>
        </div>
    </div>
    </>
  );
}

export default AllCustomers;