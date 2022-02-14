import '../App.css';
import CustomerTrack from './customerTrack.js';
import React from 'react';

function CustomerPlayList({ playListTracks }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Track Title</th>
              <th>Length</th>
              <th>Release Date</th>
              <th>Delete Track?</th>
            </tr>
          </thead>
          <tbody>
              {playListTracks.map((customerTrack, i) => <CustomerTrack track={customerTrack} key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default CustomerPlayList;
