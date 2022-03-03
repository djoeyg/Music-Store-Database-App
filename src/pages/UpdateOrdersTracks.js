import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const UpdateOrdersTracksInfo = ({ orderedTrackToEdit }) => {

    const _id = orderedTrackToEdit.orderedTrackID;
    const [orderID, setOrderID] = useState(orderedTrackToEdit.orderID);
    const [customerID, setCustomerID] = useState(orderedTrackToEdit.customerID);
    const [trackID, setTrackID] = useState(orderedTrackToEdit.trackID);

    const history = useHistory();

    const editOrderedTrack = async () => {
        const editedOrderedTrack = { _id, orderID, customerID, trackID };
        const response = await fetch(`/api/update-orders-tracks/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedOrderedTrack),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Orders/Tracks successfully updated");
        } else {
            alert(`Failed to update Orders/Tracks, status code = ${response.status}`);
        }
        history.push("/orders-tracks");
    };

    return (
      <div className="body">
        <h1>Update Orders/Tracks Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Order ID#:</td>
                        <td><input
                                type="text"
                                value={orderID}
                                onChange={e => setOrderID(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Customer ID#:</td>
                        <td><input
                                type="text"
                                value={customerID}
                                onChange={e => setCustomerID(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Track ID#:</td>
                        <td><input
                                type="text"
                                value={trackID}
                                onChange={e => setTrackID(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editOrderedTrack}>Save Changes to Orders/Tracks
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/orders-tracks">Cancel and Return to Orders/Tracks Page</Link>
      </div>
    );
}

export default UpdateOrdersTracksInfo;