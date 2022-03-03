import '../App.css';
import Purchase from './purchase.js';
import React from 'react';

function AllPurchasesList({ purchasesInfo, onPurchaseUpdate, onDeletePurchase }) {
    return (
      <>  
        <table className="table">
          <thead>
            <tr>
              <th>Purchase ID#</th>
              <th>Customer ID#</th>
              <th>Date &amp; Time</th>
              <th>Order Total</th>
              <th>Credit Card Number</th>
              <th>Expiration Date</th>
              <th>Update Info</th>
              <th>Delete Order?</th>
            </tr>
          </thead>
          <tbody>
              {purchasesInfo.map((purchaseData, i) => <Purchase
                  purchaseInfo={purchaseData} 
                  onPurchaseUpdate={onPurchaseUpdate}
                  onDeletePurchase={onDeletePurchase}
                  key={i} />)}
          </tbody>
        </table> 
      </> 
    );
}
  
export default AllPurchasesList;
