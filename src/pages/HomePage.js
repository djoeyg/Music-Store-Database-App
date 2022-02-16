import logo from '../vinyl-record-svgrepo-com.svg';     //https://www.svgrepo.com/svg/81024/vinyl-record
import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

/* <Link className="App-link" to="/user-library">See Your Music Collection Here</Link> 
   <Link className="App-link" to="/order-tracks">Download &amp; Purchase Tracks Here</Link>
*/

function HomePage() {
    return(
      <>  
        <div className="body">
          <h2>Dave &amp; Margaux's Online Music Tracks Store<br></br>Database Administrator's App</h2>
          <br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <Link className="App-link" to="/all-customers">Go to Customers Data</Link>
          <Link className="App-link" to="/all-tracks">Go to Music Tracks</Link>
          <Link className="App-link" to="/orders">Go to Orders Data</Link>
          <Link className="App-link" to="/purchases">Go to Purchases Data</Link>
        </div>   
      </>
    )
}

export default HomePage;