import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*import allOrders from '../data/allOrdersData.js';*/
import AllOrdersList from '../components/allOrdersList';
import NavBar from '../components/navBarLinks';

function Orders({ setOrderToEdit }) {

  const [allOrders, setOrders] = useState([]);
  const history = useHistory();

  const onDeleteOrder = async _id => {
    const response = await fetch(`/api/delete-order/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Order with _id = ${_id}, status code = ${response.status}`);
      }
    loadOrders();
  };

  const onOrderUpdate = orderToEdit => {
    setOrderToEdit(orderToEdit);
    history.push("/update-order");
  };

  const loadOrders = async () => {
    const response = await fetch('/api/get-orders', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
      loadOrders();
  }, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>Manage Orders Data</h2>
        <div className="App-header">
        <Link className="Body-link" to="/order-tracks">Add / Insert a new Order</Link>
        <p>Filter Orders by Customer ID#</p>
        <span>
          <input type="text" placeholder="Customer ID#" />   
          <button onClick={e => e.preventDefault()}>Search</button>
        </span>
        <br></br>
        <AllOrdersList ordersInfo={allOrders} onOrderUpdate={onOrderUpdate} onDeleteOrder={onDeleteOrder}></AllOrdersList>
        <br></br>
        </div>
    </div>
    </>
  );
}

export default Orders;