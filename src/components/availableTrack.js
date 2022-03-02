import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function AvailableTrack({ aTrack, onEdit, onDelete }) {
    return (
        <>
          <tr>
              <td>{aTrack.trackID}</td>
              <td>{aTrack.trackTitle}</td>
              <td>{aTrack.trackLength}</td>
              <td>{aTrack.retailPrice}</td>
              <td>{aTrack.releaseDate}</td>
              <td><AiFillEdit onClick={() => onEdit(aTrack)}/></td>
              <td><Link className="App-link" to="/order-tracks">Download</Link></td>
              <td><BiTrash onClick={() => onDelete(aTrack.trackID)}/></td>
          </tr>
      </>
    );
}

export default AvailableTrack;
