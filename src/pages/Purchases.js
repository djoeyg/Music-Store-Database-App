import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import allPurchases from '../data/allPurchasesData.js';
import AllPurchasesList from '../components/allPurchasesList';
import React from 'react';

function Purchases({ setPurchaseToEdit }) {

  const history = useHistory();

  const onPurchaseUpdate = purchaseToEdit => {
    setPurchaseToEdit(purchaseToEdit);
    history.push("/update-purchase");
  }

  return (
    <>
    <div className="body">
        <h2>Manage Purchases Data</h2>
        <div className="App-header">
        <Link className="App-link" to="/order-tracks">Add new Order</Link>
        <br></br>
        <AllPurchasesList purchasesInfo={allPurchases} onPurchaseUpdate={onPurchaseUpdate}></AllPurchasesList>
        <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default Purchases;