import '../App.css';
import '../layout.css'
import NavBar from '../components/navBarLinks';
import AddNewOrderedTrack from '../components/addOrderedTrack';
import React from 'react';

function OrdersTracks() {
    return (
        <>
        <NavBar></NavBar>
          <div className="body">
            <h2>Orders/Tracks Composite Table</h2>
              <div className="App-header">
              <p>Search Ordered Tracks by ID#</p>
                <span>
                  <input type="text" placeholder="Ordered Track ID#" />   
                  <button onClick={e => e.preventDefault()}>Search</button>
                </span>
                  <AddNewOrderedTrack></AddNewOrderedTrack>
                <table className="table">
                  <thead>
                    <tr> 
                      <th>O/Tr ID#</th>  
                      <th>Order ID#</th>
                      <th>Order Complete</th>
                      <th>Date &amp; Time</th>
                      <th>Customer ID#</th> 
                      <th>Track ID#</th>
                      <th>Track Title</th>
                      <th>Track Length</th>
                      <th>Retail Price</th>
                      <th>Release Date</th>
                    </tr>
                  </thead>
                <tbody>
                    <tr>
                      <td>1</td>  
                      <td>1</td>
                      <td>True</td>
                      <td>2022-01-30 14:30:00</td>
                      <td>1</td>
                      <td>2</td>
                      <td>Chicken Fried</td>
                      <td>4:33</td>
                      <td>2.00</td>
                      <td>2008-06-16</td>
                    </tr> 
                    <tr>
                      <td>2</td>  
                      <td>2</td>
                      <td>True</td>
                      <td>2022-02-01 09:45:00</td>
                      <td>2</td>
                      <td>1</td>
                      <td>We Don't Talk About Bruno</td>
                      <td>3:36</td>
                      <td>2.00</td>
                      <td>2021-11-19</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>3</td>
                      <td>True</td>
                      <td>2022-02-04 11:15:00</td>
                      <td>1</td>
                      <td>3</td>
                      <td>Young Blood</td>
                      <td>3:53</td>
                      <td>2.00</td>
                      <td>2010-07-07</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>4</td>
                      <td>False</td>
                      <td>2022-02-11 17:00:00</td>
                      <td>3</td>
                      <td>Null</td>
                      <td>Null</td>
                      <td>Null</td>
                      <td>Null</td>
                      <td>Null</td>
                    </tr>            
                  </tbody>
                </table>
                <br></br>
              </div>
            </div> 
      </>
    );
}

export default OrdersTracks;

/* { orderID: '1', customerID: '1', orderDateTime: '2022-01-30 14:30:00', orderComplete: 'True' },
    { orderID: '2', customerID: '2', orderDateTime: '2022-02-01 09:45:00', orderComplete: 'True' },
    { orderID: '3', customerID: '1', orderDateTime: '2022-02-04 11:15:00', orderComplete: 'True' },
    { orderID: '4', customerID: '3', orderDateTime: '2022-02-11 17:00:00', orderComplete: 'False' }
    
    { trackID: '2', 
      trackTitle: 'Chicken Fried', 
      trackLength: '4:33', 
      retailPrice: '2.00', 
      releaseDate: '2008-06-16' },

    { trackID: '3', 
      trackTitle: 'Young Blood', 
      trackLength: '3:53', 
      retailPrice: '2.00', 
      releaseDate: '2010-07-07' },
    ],

    [
    { trackID: '1', 
      trackTitle: "We Don't Talk About Bruno", 
      trackLength: '3:36', 
      retailPrice: '1.99', 
      releaseDate: '2021-11-19' },
    ],

    [
    { trackID: 'Null', 
      trackTitle: "Null", 
      trackLength: 'Null', 
      retailPrice: 'Null', 
      releaseDate: 'Null' },
    ]
    */