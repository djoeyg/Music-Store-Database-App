import '../App.css';
import '../layout.css'
import React from 'react';
import NavBar from '../components/navBarLinks';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AllOrdersTracksList from '../components/allOrdersTracksList';
import OrderSelectFill from '../components/orderSelectFill';
import TrackSelectFill from '../components/trackSelectFill';

function OrdersTracks({ setOrderedTrackToEdit }) {

  const [orderID, setOrderID] = useState('');
  const [trackID, setTrackID] = useState('');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [allOrdersTracks, setOrdersTracks] = useState([]);
  const history = useHistory();

  const AddOrderedTrack = async () => {
    const newOrderedTrack = { orderID, trackID };
    const response = await fetch('/api/insert-ordered-track', {
        method: 'POST',
        body: JSON.stringify(newOrderedTrack),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.status !== 200) {
        alert(`Failed to add new information to OrdersTracks table, status code = ${response.status}`);
      }   
    loadOrdersTracks();
  };

  const onDeleteOrderedTrack = async _id => {
    const response = await fetch(`/api/delete-ordered-track/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Ordered Track with _id = ${_id}, status code = ${response.status}`);
      }
    loadOrdersTracks();
  };

  const onOrdersTracksUpdate = orderedTrackToEdit => {
    setOrderedTrackToEdit(orderedTrackToEdit);
    history.push("/update-orders-tracks");
  }

  const loadOrdersTracks = async () => {
    const response = await fetch('/api/get-orders-tracks', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setOrdersTracks(data);
  };

  useEffect(() => {
      loadOrdersTracks();
  }, []);

  return (
    <>
      <NavBar></NavBar>
        <div className="body">
          <h2>Orders/Tracks Composite Table</h2>
            <div className="App-header">
            <p>Search Ordered Tracks by the Order ID#</p>
              <div>
                <input type="text" 
                    placeholder="Search..."
                    onChange={e => {setSearchTerm(e.target.value)}}/>
  
                <h4>Insert New Ordered Track Information</h4>
                <select class="fieldset"
                        type="number"
                        id="order"
                        value={orderID}
                        onChange={e => setOrderID(e.target.value)}>
                        <option value=''>Select Order ID</option>
                        <OrderSelectFill />
                </select>
                <select class="fieldset"
                        type="number"
                        id="track"
                        value={trackID}
                        onChange={e => setTrackID(e.target.value)}>
                        <option value='Null'>Null</option>
                        <TrackSelectFill />
                </select>

                <br></br><br></br>

                <button
                    onClick={AddOrderedTrack}
                >Add to Ordered Tracks</button>
                <br></br>
              </div>
              <br></br>
              <AllOrdersTracksList ordersTracksInfo={allOrdersTracks.filter(val => {
              if (searchTerm === '') {
                return val;
              } else if (
                  val.orderID.toString().toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
          })} onOrdersTracksUpdate={onOrdersTracksUpdate} onDeleteOrderedTrack={onDeleteOrderedTrack}></AllOrdersTracksList>
              <br></br>
            </div>
          <br></br>
        </div> 
    </>
  );
}

export default OrdersTracks;

/* <input
    type="text"
    value={orderID}
    placeholder="Order ID#"
    onChange={e => setOrderID(e.target.value)} /> */

/* <input
    type="text"
    value={trackID}
    placeholder="Track ID#"
    onChange={e => setTrackID(e.target.value)} /> */

/*
  const [orderComplete, setOrderComplete] = useState('')
  const [dateTime, setDateTime] = useState('');

  const [trackTitle, setTrackTitle] = useState('');
  const [trackLength, setTrackLength] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  <input
      type="text"
      value={orderComplete}
      placeholder="Order Complete?"
      onChange={e => setOrderComplete(e.target.value)} />
  
  <input
      type="text"
      value={dateTime}
      placeholder="Date &amp; Time"
      onChange={e => setDateTime(e.target.value)} />

  <input
      type="text"
      value={trackTitle}
      placeholder="Track Title"
      onChange={e => setTrackTitle(e.target.value)} />

  <input
      type="text"
      value={trackLength}
      placeholder="Track Length"
      onChange={e => setTrackLength(e.target.value)} /> 

  <input
      type="text"
      value={retailPrice}
      placeholder="Retail Price"
      onChange={e => setRetailPrice(e.target.value)} />

  <input
      type="text"
      value={releaseDate}
      placeholder="Release Date"
      onChange={e => setReleaseDate(e.target.value)} />


    { orderID: '1', customerID: '1', orderDateTime: '2022-01-30 14:30:00', orderComplete: 'True' },
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
    */