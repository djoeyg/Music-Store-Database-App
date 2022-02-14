import '../App.css';
import { BiTrash } from 'react-icons/bi';
import React from 'react';

function CustomerTrack({ track }) {
    return (
        <>
          <tr>
              <td>{track.trackID}</td>
              <td>{track.trackTitle}</td>
              <td>{track.trackLength}</td>
              <td>{track.releaseDate}</td>
              <td><BiTrash onClick={e => {
                  alert('Track Deleted');
                  e.preventDefault();
                  }}/></td>
          </tr>
      </>
    );
}

export default CustomerTrack;
