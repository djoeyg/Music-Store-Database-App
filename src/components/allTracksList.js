import '../App.css';
import AvailableTrack from './availableTrack.js';
import AddNewTrack from '../components/addTrack';
import React from 'react';

function AllTracksList({ availableTracks }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Track Title</th>
              <th>Length</th>
              <th>Release Date</th>
              <th>Purchase Track</th>
            </tr>
          </thead>
          <tbody>
              {availableTracks.map((availableTrack, i) => <AvailableTrack aTrack={availableTrack} key={i} />)}
          </tbody>
        </table>
        <AddNewTrack></AddNewTrack> 
      </> 
    );
}
  
export default AllTracksList;
