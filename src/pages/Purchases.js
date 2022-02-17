import '../App.css';
import { useHistory } from 'react-router-dom';
import allPurchases from '../data/allPurchasesData.js';
import AllPurchasesList from '../components/allPurchasesList';
import NavBar from '../components/navBarLinks';
import React from 'react';

function Purchases({ setPurchaseToEdit }) {

  const history = useHistory();

  const onPurchaseUpdate = purchaseToEdit => {
    setPurchaseToEdit(purchaseToEdit);
    history.push("/update-purchase");
  }

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
      <h2>Manage Purchases Data</h2>
        <div className="App-header">
        <br></br>
        <p>Filter Purchases by Customer ID#</p>
        <span>
          <input type="text" placeholder="Customer ID#" />   
          <button onClick={e => e.preventDefault()}>Search</button>
        </span>
        <br></br>
        <AllPurchasesList purchasesInfo={allPurchases} onPurchaseUpdate={onPurchaseUpdate}></AllPurchasesList>
        <br></br>
        </div>
    </div>
    </>
  );
}

export default Purchases;