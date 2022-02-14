import '../App.css';
import React from 'react';
/*import { Link } from 'react-router-dom';*/

function Customer({ custInfo }) {
    return (
        <>
          <tr>
              <td>{custInfo.customerID}</td>
              <td>{custInfo.firstName}</td>
              <td>{custInfo.lastName}</td>
              <td>{custInfo.email}</td>
          </tr>
      </>
    );
}

export default Customer;
