import '../App.css';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

function Order({ orderInfo, onOrderUpdate }) {
    return (
        <>
          <tr>
              <td>{orderInfo.orderID}</td>
              <td>{orderInfo.customerID}</td>
              <td>{orderInfo.orderDateTime}</td>
              <td>{orderInfo.orderComplete}</td>
              <td><AiFillEdit onClick={() => onOrderUpdate(orderInfo)}/></td>
              <td><BiTrash onClick={e => {
                  alert('Order Deleted');
                  e.preventDefault();
                  }}/></td>
          </tr>
      </>
    );
}

export default Order;
