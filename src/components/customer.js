import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

/*<td><AiFillEdit onClick={() => onView(custInfo)}/></td>*/

function Customer({ custInfo, onUpdate, onView, onDeleteCustomer }) {
    return (
        <>
          <tr>
              <td>{custInfo.customerID}</td>
              <td>{custInfo.ipAddress}</td>
              <td>{custInfo.customerFirstName}</td>
              <td>{custInfo.customerLastName}</td>
              <td>{custInfo.customerEmail}</td>
              <td>{custInfo.customerStreet}</td>
              <td>{custInfo.customerCity}</td>
              <td>{custInfo.customerState}</td>
              <td>{custInfo.customerZip}</td>
              <td>{custInfo.customerPhone}</td>
              <td><AiFillEdit onClick={() => onUpdate(custInfo)}/></td>
              <td><Link className="App-link" onClick={() => onView(custInfo)} to="user-library">View</Link></td>
              <td><BiTrash onClick={() => onDeleteCustomer(custInfo.customerID)}/></td>
          </tr>
      </>
    );
}

export default Customer;
