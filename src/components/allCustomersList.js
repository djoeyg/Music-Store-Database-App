import '../App.css';
import Customer from './customer.js';
import React from 'react';

function AllCustomersList({ customersInfo, onUpdate, onView }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>St</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>IP Address</th>
              <th>Update Info</th>
              <th>Customer Play List</th>
            </tr>
          </thead>
          <tbody>
              {customersInfo.map((customerData, i) => <Customer 
                  custInfo={customerData} 
                  onUpdate={onUpdate}
                  onView={onView} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllCustomersList;
