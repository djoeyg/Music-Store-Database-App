import '../App.css';
import Customer from './customer.js';
import AddNewCustomer from '../components/addCustomer';
import React from 'react';

function AllCustomersList({ customersInfo }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>ID#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              {customersInfo.map((customerData, i) => <Customer custInfo={customerData} key={i} />)}
          </tbody>
        </table> 
        <AddNewCustomer></AddNewCustomer>
      </> 
    );
}
  
export default AllCustomersList;
