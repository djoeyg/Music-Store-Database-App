import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import CustomerSelectFill from '../components/customerSelectFill';

export const UpdateOrderInfo = ({ orderToEdit }) => {

    const _id = orderToEdit.orderID
    const originalDateTime = orderToEdit.orderDateTime
    /*const showBool = displayBool(orderToEdit.orderComplete);*/

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDateTime = moment(originalDateTime).format("YYYY-MM-DD HH:mm:ss");

    const [customerID, setCustomerID] = useState(orderToEdit.customerID);
    const [orderDateTime, setOrderDateTime] = useState(formatedDateTime);
    const [orderComplete, setComplete] = useState(orderToEdit.orderComplete);

    const [customer, setCustomer] = useState([]);
    const history = useHistory();

    const editOrder = async () => {
        const editedOrder = { customerID, orderDateTime, orderComplete, _id};
        const response = await fetch(`/api/update-order/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedOrder),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Order information successfully updated");
        } else {
            alert(`Failed to update order information, status code = ${response.status}`);
        }
        history.push("/orders");
    };

    const searchCustomer = async inputID => {
        const _id = inputID
        const response = await fetch(`/api/get-customer/${_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const customer = await response.json();
        setCustomer(customer);
    };

    useEffect(() => {
        searchCustomer(customerID);
        console.log(customer);
    });

    /*function displayBool(value) {
        let outVal;
        if (value === 0) {
            outVal = "No";
        } else if (value === 1) {
            outVal = "Yes";
        } else
            outVal = value;
        return outVal;
    };*/

    /*function convertBool(value) {
        let outVal;
        if (value === "No") {
            outVal = 0;
        } else if (value === "Yes") {
            outVal = 1;
        } else
            outVal = value;
        return outVal;
    };*/

    /* <tr>
        <td>Order Complete:</td>
        <td>
            <input
                type="text"
                value={orderComplete}
                onChange={e => setComplete(e.target.value)} />
        </td>
    </tr> */

    return (
      <div className="body">
        <h1>Update Order Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Customer:</td>
                        <td><select 
                                class="fieldset"
                                type="number"
                                id="customer"
                                value={customerID}
                                onChange={e => setCustomerID(e.target.value)}>
                                <CustomerSelectFill />
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Order Date &amp; TIme:</td>
                        <td><input
                                type="text"
                                value={orderDateTime}
                                onChange={e => setOrderDateTime(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Order Complete:</td>
                        <td><select 
                                class="fieldset"
                                type="number"
                                id="customer"
                                value={orderComplete}
                                onChange={e => setComplete(e.target.value)}>
                                    <option value='0'>No</option>
                                    <option value='1'>Yes</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editOrder}>Save Changes to Order
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/orders">Cancel and Return to Orders Page</Link>
      </div>
    );
}

export default UpdateOrderInfo;