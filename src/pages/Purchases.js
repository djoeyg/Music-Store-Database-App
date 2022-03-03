import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*import allPurchases from '../data/allPurchasesData.js';*/
import AllPurchasesList from '../components/allPurchasesList';
import NavBar from '../components/navBarLinks';

function Purchases({ setPurchaseToEdit }) {

  const [allPurchases, setPurchases] = useState([]);
  const history = useHistory();

  const onDeletePurchase = async _id => {
    const response = await fetch(`/api/delete-purchase/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Purchase with _id = ${_id}, status code = ${response.status}`);
      }
    loadPurchases();
  };

  const onPurchaseUpdate = purchaseToEdit => {
    setPurchaseToEdit(purchaseToEdit);
    history.push("/update-purchase");
  }

  const loadPurchases = async () => {
    const response = await fetch('/api/get-purchases', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setPurchases(data);
  };

  useEffect(() => {
      loadPurchases();
  }, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
      <h2>Manage Purchases Data</h2>
        <div className="App-header">
        <Link className="App-link" to="/order-tracks">Add/Insert a new Purchase</Link>
        <p>Filter Purchases by Customer ID#</p>
        <span>
          <input type="text" placeholder="Customer ID#" />   
          <button onClick={e => e.preventDefault()}>Search</button>
        </span>
        <br></br>
        <AllPurchasesList purchasesInfo={allPurchases} onPurchaseUpdate={onPurchaseUpdate} onDeletePurchase={onDeletePurchase}></AllPurchasesList>
        <br></br>
        </div>
    </div>
    </>
  );
}

export default Purchases;