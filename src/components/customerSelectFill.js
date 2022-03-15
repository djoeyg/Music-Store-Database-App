import { React, useEffect } from 'react';
import { useState } from 'react';

function CustomerSelectFill() {

    const [allCustomers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        const response = await fetch('/api/get-customers', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        setCustomers(data);
      };
    
    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <>
            {allCustomers.map((customer, key) => (<option value={customer.customerID} id={key}>{customer.customerFirstName} {customer.customerLastName}</option>))}
        </>
    );
};

export default CustomerSelectFill;