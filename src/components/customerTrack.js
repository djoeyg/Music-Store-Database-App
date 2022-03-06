import '../App.css';
import { BiTrash } from 'react-icons/bi';
import moment from 'moment';
import React from 'react';

function CustomerTrack({ track, onDeleteOrderedTrack }) {

    function displayVal(value) {
        let outVal;
        if (value === null) {
            outVal = "Null";
        } else 
            outVal = value;
        return outVal;
    };

    function formatedDate(date) {
        let outVal;
        if (date === null) {
            outVal = "Null";
        } else
            outVal = moment(date).format("YYYY-MM-DD");
        return outVal;
    };

    return (
        <>
          <tr>
              <td>{displayVal(track.trackID)}</td>
              <td>{displayVal(track.trackTitle)}</td>
              <td>{displayVal(track.trackLength)}</td>
              <td>${displayVal(track.retailPrice)}</td>
              <td>{formatedDate(track.releaseDate)}</td>
              <td><BiTrash onClick={() => onDeleteOrderedTrack(track.orderedTrackID, track.customerID)}/></td>
          </tr>
      </>
    );
}

export default CustomerTrack;
