import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLibrary from './pages/UserLibrary';
import AllTracks from './pages/AllTracks';
import Orders from './pages/Orders';
import React from 'react';

function App() {
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
        <Route path="/order-tracks">
          <Orders />
        </Route>
      </Router>
    </div>
    </>
  );
}

export default App;
