import '../App.css';
import Customer from './customer.js';
import React from 'react';

function AllCustomersList({ customersInfo, onUpdate, onView, onDeleteCustomer }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>IP Address</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>St</th>
              <th>Zip Code</th>
              <th>Phone</th>
              <th>Edit Info</th>
              <th>Play List</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
              {customersInfo.map((customerData, i) => <Customer 
                  custInfo={customerData} 
                  onUpdate={onUpdate}
                  onView={onView}
                  onDeleteCustomer={onDeleteCustomer} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllCustomersList;
