import '../App.css';
import React from 'react';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

function Order({ orderInfo, onOrderUpdate, onDeleteOrder }) {

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDateTime = moment(orderInfo.orderDateTime).format("YYYY-MM-DD HH:mm:ss");

    function displayBool(value) {
        let outVal;
        if (value === 0) {
            outVal = "No";
        } else if (value === 1) {
            outVal = "Yes";
        } else
            outVal = value;
        return outVal;
    };

    return (
        <>
          <tr>
              <td>{orderInfo.orderID}</td>
              <td>{orderInfo.customerID}</td>
              <td>{formatedDateTime}</td>
              <td>{displayBool(orderInfo.orderComplete)}</td>
              <td><AiFillEdit className="Table-link" onClick={() => onOrderUpdate(orderInfo)}/></td>
              <td><BiTrash className="Table-link" onClick={() => onDeleteOrder(orderInfo.orderID)}/></td>
          </tr>
      </>
    );
}

export default Order;
