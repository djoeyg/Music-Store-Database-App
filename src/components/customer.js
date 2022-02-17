import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

/*<td><AiFillEdit onClick={() => onView(custInfo)}/></td>*/

function Customer({ custInfo, onUpdate, onView }) {
    return (
        <>
          <tr>
              <td>{custInfo.customerID}</td>
              <td>{custInfo.firstName}</td>
              <td>{custInfo.lastName}</td>
              <td>{custInfo.email}</td>
              <td>{custInfo.street}</td>
              <td>{custInfo.city}</td>
              <td>{custInfo.state}</td>
              <td>{custInfo.zipCode}</td>
              <td>{custInfo.phone}</td>
              <td>{custInfo.ipAddress}</td>
              <td><AiFillEdit onClick={() => onUpdate(custInfo)}/></td>
              <td><Link className="App-link" onClick={() => onView(custInfo)} to="user-library">View Tracks</Link></td>
          </tr>
      </>
    );
}

export default Customer;
