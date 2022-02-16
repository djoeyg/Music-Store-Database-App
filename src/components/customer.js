import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

function Customer({ custInfo, onUpdate }) {
    return (
        <>
          <tr>
              <td>{custInfo.customerID}</td>
              <td>{custInfo.firstName}</td>
              <td>{custInfo.lastName}</td>
              <td>{custInfo.email}</td>
              <td><AiFillEdit onClick={() => onUpdate(custInfo)}/></td>
          </tr>
      </>
    );
}

export default Customer;
