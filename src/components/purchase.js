import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

function Purchase({ purchaseInfo, onPurchaseUpdate }) {
    return (
        <>
          <tr>
              <td>{purchaseInfo.purchaseID}</td>
              <td>{purchaseInfo.customerID}</td>
              <td>{purchaseInfo.purchaseDateTime}</td>
              <td>{purchaseInfo.totalPurchase}</td>
              <td>{purchaseInfo.creditCardNum}</td>
              <td>{purchaseInfo.creditCardExp}</td>
              <td><AiFillEdit onClick={() => onPurchaseUpdate(purchaseInfo)}/></td>
              <td><BiTrash onClick={e => {
                  alert('Purchase Deleted');
                  e.preventDefault();
                  }}/></td>
          </tr>
      </>
    );
}

export default Purchase;
