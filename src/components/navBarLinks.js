import '../layout.css'
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
    return(
      <> 
        <div className="wrapper">
          <div className="box box1">
            
          </div>
          <div className="box box2">
            <Link className="App-link" to="/">Home Page</Link>
          </div>
          <div className="box box3">
            <Link className="App-link" to="/all-customers">Customers</Link>
          </div>
          <div className="box box4">   
            <Link className="App-link" to="/all-tracks">Music Tracks</Link>
          </div>
          <div className="box box5">
            <Link className="App-link" to="/orders">Orders Data</Link>
          </div>
          <div className="box box6">
            <Link className="App-link" to="/orders-composite-table">Orders/Tracks</Link>
          </div>
          <div className="box box7">
            <Link className="App-link" to="/purchases">Purchases</Link>
          </div>
        </div>
      </>
    )
}

export default NavBar;