import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import UserLibrary from './pages/UserLibrary';
import AllTracks from './pages/AllTracks';
import AllCustomers from './pages/AllCustomers';
import UpdateCustomerInfo from './pages/UpdateCustomer';
import OrderForm from './pages/OrderForm';
import Orders from './pages/Orders';
import Purchases from './pages/Purchases';
import React from 'react';

function App() {

  const [customerToEdit, setCustomerToEdit] = useState();

  return (
    <>
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/user-library">
          <UserLibrary />
        </Route>
        <Route path="/all-tracks">
          <AllTracks />
        </Route>
        <Route path="/all-customers">
          <AllCustomers setCustomerToEdit={setCustomerToEdit}/>
        </Route>
        <Route path="/update-customer">
          <UpdateCustomerInfo customerToEdit={customerToEdit}/>
        </Route>
        <Route path="/order-tracks">
          <OrderForm />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/purchases">
          <Purchases />
        </Route>
      </Router>
    </div>
    </>
  );
}

export default App;
