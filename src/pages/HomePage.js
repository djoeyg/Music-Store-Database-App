import logo from '../vinyl-record-svgrepo-com.svg';     //https://www.svgrepo.com/svg/81024/vinyl-record
import '../App.css';
import '../layout.css'
import { Link } from 'react-router-dom';
import React from 'react';

function HomePage() {
    return(
      <>  
        <div className="wrapper">
          <div className="box box1">
            
          </div>
          <div className="box box2">
            <Link className="App-link" to="/all-customers">Customers</Link>
          </div>
          <div className="box box3">
            <Link className="App-link" to="/all-tracks">Music Tracks</Link>
          </div>
          <div className="box box4">   
            <Link className="App-link" to="/orders">Orders Data</Link>
          </div>
          <div className="box box5">
            <Link className="App-link" to="/purchases">Purchases</Link>
          </div>
          <div className="box box6">
          
          </div>
          <div className="box box7">
            
          </div>
        </div>
        <div className="body">  
        
          <h2>Dave &amp; Margaux's Online Music Tracks Store<br></br>Database Administrator's App</h2>
          <br></br><br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br><br></br>
        </div>   
      </>
    )
}

export default HomePage;