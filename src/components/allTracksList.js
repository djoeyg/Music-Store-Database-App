import '../App.css';
import AvailableTrack from './availableTrack.js';
import React from 'react';

function AllTracksList({ availableTracks, onEdit, onDelete }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Track Title</th>
              <th>Length</th>
              <th>Price</th>
              <th>Release Date</th>
              <th>Edit Info</th>
              <th>Purchase Track</th>
              <th>Delete Track?</th>
            </tr>
          </thead>
          <tbody>
              {availableTracks.map((availableTrack, i) => <AvailableTrack 
                  aTrack={availableTrack}
                  onEdit={onEdit}
                  onDelete={onDelete} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllTracksList;
