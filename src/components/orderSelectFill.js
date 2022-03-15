import { React, useEffect } from 'react';
import { useState } from 'react';

function OrderSelectFill() {

    const [allOrders, setOrders] = useState([]);

    const loadOrders = async () => {
        const response = await fetch('/api/get-orders', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        setOrders(data);
      };
    
    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <>
            {allOrders.map((order, key) => (<option value={order.orderID} id={key}>{order.orderID}</option>))}
        </>
    );
};

export default OrderSelectFill;