import '../App.css';
import React from 'react';
import moment from 'moment';    
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function AvailableTrack({ aTrack, onEdit, onDeleteTrack }) {

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDate = moment(aTrack.releaseDate).format("YYYY-MM-DD");

    return (
        <>
          <tr>
              <td>{aTrack.trackID}</td>
              <td>{aTrack.trackTitle}</td>
              <td>{aTrack.trackLength}</td>
              <td>${aTrack.retailPrice}</td>
              <td>{formatedDate}</td>
              <td><AiFillEdit className="Table-link" onClick={() => onEdit(aTrack)}/></td>
              <td><Link className="Table-link" to="/order-tracks">Download</Link></td>
              <td><BiTrash className="Table-link" onClick={() => onDeleteTrack(aTrack.trackID)}/></td>
          </tr>
      </>
    );
}

export default AvailableTrack;
