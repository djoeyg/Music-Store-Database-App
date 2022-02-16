import '../App.css';
import Customer from './customer.js';
import React from 'react';

function AllCustomersList({ customersInfo, onUpdate }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Update Info</th>
            </tr>
          </thead>
          <tbody>
              {customersInfo.map((customerData, i) => <Customer 
                  custInfo={customerData} 
                  onUpdate={onUpdate} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllCustomersList;
