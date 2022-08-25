import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import OrderSelectFill from '../components/orderSelectFill';
import TrackSelectFill from '../components/trackSelectFill';

export const UpdateOrdersTracksInfo = ({ orderedTrackToEdit }) => {

    const _id = orderedTrackToEdit.orderedTrackID;
    const [orderID, setOrderID] = useState(orderedTrackToEdit.orderID);
    const [trackID, setTrackID] = useState(orderedTrackToEdit.trackID);

    const [ordersTracks, setOrdersTracks] = useState([])
    const history = useHistory();

    const editOrderedTrack = async () => {
        const editedOrderedTrack = { _id, orderID, trackID };
        const response = await fetch(`/api/update-ordered-track/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedOrderedTrack),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.status === 200) {
            /*alert("Orders/Tracks successfully updated");*/
            history.push("/orders-tracks");
        } else {
            alert(`Unalbe to update Orders/Tracks, status code = ${response.status}`);
        }
    };

    const loadOrdersTracks = async () => {
        const response = await fetch('/api/get-orders-tracks', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        setOrdersTracks(data);
    };
    
    useEffect(() => {
        loadOrdersTracks();
        console.log(ordersTracks);
    });

    return (
      <div className="body">
        <h1>Update Orders/Tracks Information</h1>
        <div className="App-header">
            <br></br>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Order ID#:</td>
                        <td>
                            <select class="fieldset"
                                type="number"
                                id="order"
                                value={orderID}
                                onChange={e => setOrderID(e.target.value)}>
                                <option value=''>Select Order ID</option>
                                <OrderSelectFill />
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Track:</td>
                        <td>
                            <select class="fieldset"
                                type="number"
                                id="track"
                                value={trackID}
                                onChange={e => setTrackID(e.target.value)}>
                                <option value=''>Null</option>
                                <TrackSelectFill />
                            </select>
                        </td>
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