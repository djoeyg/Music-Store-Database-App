import '../App.css';
import React from 'react';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

function Purchase({ purchaseInfo, onPurchaseUpdate, onDeletePurchase }) {

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDateTime = moment(purchaseInfo.purchaseDateTime).format("YYYY-MM-DD HH:mm:ss");

    function displayVal(value) {
        let outVal;
        if (value === null) {
            outVal = "Null";
        } else 
            outVal = '$' + value;
        return outVal;
    };

    return (
        <>
          <tr>
              <td>{purchaseInfo.purchaseID}</td>
              <td>{purchaseInfo.customerID}</td>
              <td>{formatedDateTime}</td>
              <td>{displayVal(purchaseInfo.totalPurchase)}</td>
              <td>{purchaseInfo.creditCardNum}</td>
              <td>{purchaseInfo.creditCardExp}</td>
              <td><AiFillEdit className="Table-link" onClick={() => onPurchaseUpdate(purchaseInfo)}/></td>
              <td><BiTrash className="Table-link" onClick={() => onDeletePurchase(purchaseInfo.purchaseID)}/></td>
          </tr>
      </>
    );
}

export default Purchase;
