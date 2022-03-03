import '../App.css';
import Order from './order.js';
import React from 'react';

function AllOrdersList({ ordersInfo, onOrderUpdate, onDeleteOrder }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>Order ID#</th>
              <th>Customer ID#</th>
              <th>Date &amp; Time</th>
              <th>Order Complete</th>
              <th>Update Info</th>
              <th>Delete Order?</th>
            </tr>
          </thead>
          <tbody>
              {ordersInfo.map((orderData, i) => <Order 
                  orderInfo={orderData} 
                  onOrderUpdate={onOrderUpdate}
                  onDeleteOrder={onDeleteOrder} 
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllOrdersList;
