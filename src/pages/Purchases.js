import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*import allPurchases from '../data/allPurchasesData.js';*/
import AllPurchasesList from '../components/allPurchasesList';
import NavBar from '../components/navBarLinks';

function Purchases({ setPurchaseToEdit }) {

  const [searchTerm, setSearchTerm] = useState('');
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
        <Link className="Body-link" to="/order-tracks">Add / Insert a new Purchase</Link>
        <p>Filter Purchases by Customer ID#</p>
        <span>
        <input type="text" 
            placeholder="Search..."
            onChange={e => {setSearchTerm(e.target.value)}}/>
        </span>
        <br></br>
        <AllPurchasesList purchasesInfo={allPurchases.filter(val => {
              if (searchTerm === '') {
                return val;
              } else if (
                  val.customerID.toString().toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
          })} onPurchaseUpdate={onPurchaseUpdate} onDeletePurchase={onDeletePurchase}></AllPurchasesList>
        <br></br>
        </div>
    </div>
    </>
  );
}

export default Purchases;