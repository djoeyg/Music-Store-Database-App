import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import UserLibrary from './pages/UserLibrary';
import AllTracks from './pages/AllTracks';
import AllCustomers from './pages/AllCustomers';
import EditTrackInfo from './pages/EditTrackInfo';
import UpdateCustomerInfo from './pages/UpdateCustomer';
import OrderForm from './pages/OrderForm';
import Orders from './pages/Orders';
import UpdateOrderInfo from './pages/UpdateOrder';
import Purchases from './pages/Purchases';
import UpdatePurchaseInfo from './pages/UpdatePurchase';
import React from 'react';

function App() {

  const [customerToEdit, setCustomerToEdit] = useState();
  const [customerToView, setCustomerToView] = useState();
  const [trackToEdit, setTrackToEdit] = useState();
  const [orderToEdit, setOrderToEdit] = useState();
  const [purchaseToEdit, setPurchaseToEdit] = useState();

  return (
    <>
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/all-tracks">
          <AllTracks setTrackToEdit={setTrackToEdit}/>
        </Route>
        <Route path="/edit-track">
          <EditTrackInfo trackToEdit={trackToEdit}/>
        </Route>
        <Route path="/all-customers">
          <AllCustomers setCustomerToEdit={setCustomerToEdit} setCustomerToView={setCustomerToView}/>
        </Route>
        <Route path="/update-customer">
          <UpdateCustomerInfo customerToEdit={customerToEdit}/>
        </Route>
        <Route path="/user-library">
          <UserLibrary customerToView={customerToView}/>
        </Route>
        <Route path="/order-tracks">
          <OrderForm />
        </Route>
        <Route path="/orders">
          <Orders setOrderToEdit={setOrderToEdit}/>
        </Route>
        <Route path="/update-order">
          <UpdateOrderInfo orderToEdit={orderToEdit}/>
        </Route>
        <Route path="/purchases">
          <Purchases setPurchaseToEdit={setPurchaseToEdit}/>
        </Route>
        <Route path="/update-purchase">
          <UpdatePurchaseInfo purchaseToEdit={purchaseToEdit}/>
        </Route>
      </Router>
    </div>
    </>
  );
}

export default App;
