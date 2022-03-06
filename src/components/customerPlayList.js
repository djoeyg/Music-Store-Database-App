import '../App.css';
import CustomerTrack from './customerTrack.js';
import React from 'react';

function CustomerPlayList({ playListTracks, onDeleteOrderedTrack }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>Track ID#</th>
              <th>Track Title</th>
              <th>Length</th>
              <th>Price</th>
              <th>Release Date</th>
              <th>Delete Track?</th>
            </tr>
          </thead>
          <tbody>
              {playListTracks.map((customerTrack, i) => <CustomerTrack 
                track={customerTrack} 
                onDeleteOrderedTrack={onDeleteOrderedTrack}
                key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default CustomerPlayList;
