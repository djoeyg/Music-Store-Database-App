import '../App.css';
import OrderedTrack from './orderedTrack.js';
import React from 'react';

function AllOrdersTracksList({ ordersTracksInfo, onOrdersTracksUpdate, onDeleteOrderedTrack }) {
    return (
      <>  
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
              <th>Edit Info</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
              {ordersTracksInfo.map((ordersTracksData, i) => <OrderedTrack 
                  ordTrksInfo={ordersTracksData} 
                  onOrdersTracksUpdate={onOrdersTracksUpdate}
                  onDeleteOrderedTrack={onDeleteOrderedTrack} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllOrdersTracksList;
