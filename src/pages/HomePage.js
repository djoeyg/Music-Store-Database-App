import logo from '../vinyl-record-svgrepo-com.svg';     //https://www.svgrepo.com/svg/81024/vinyl-record
import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';


function HomePage() {
    return(
      <>  
            <header className="body">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Dave &amp; Margaux's Online Music Tracks Store!
            </p>
            <Link className="App-link" to="/all-customers">View All Customers Here</Link>
            <Link className="App-link" to="/user-library">See Your Music Collection Here</Link>
            <Link className="App-link" to="/all-tracks">See All Available Music Tracks Here</Link>
            <Link className="App-link" to="/order-tracks">Download &amp; Purchase Tracks Here</Link>
            </header>   
      </>
    )
}

export default HomePage;