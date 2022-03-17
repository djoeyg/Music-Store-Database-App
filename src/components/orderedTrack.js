import '../App.css';
import React from 'react';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

function OrderedTrack({ ordTrksInfo, onOrdersTracksUpdate, onDeleteOrderedTrack }) {

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDateTime = moment(ordTrksInfo.orderDateTime).format("YYYY-MM-DD HH:mm:ss");
    
    function formatedDate(date) {
        let outVal;
        if (date === null) {
            outVal = "Null";
        } else
            outVal = moment(date).format("YYYY-MM-DD");
        return outVal;
    };

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

    function displayVal(value) {
        let outVal;
        if (value === null) {
            outVal = "Null";
        } else 
            outVal = value;
        return outVal;
    };

    function display$(value) {
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
            <td>{ordTrksInfo.orderedTrackID}</td>
            <td>{ordTrksInfo.orderID}</td>
            <td>{displayBool(ordTrksInfo.orderComplete)}</td>
            <td>{formatedDateTime}</td>
            <td>{ordTrksInfo.customerID}</td>
            <td>{displayVal(ordTrksInfo.trackID)}</td>
            <td>{displayVal(ordTrksInfo.trackTitle)}</td>
            <td>{displayVal(ordTrksInfo.trackLength)}</td>
            <td>{display$(ordTrksInfo.retailPrice)}</td>
            <td>{formatedDate(ordTrksInfo.releaseDate)}</td>
            <td><AiFillEdit className="Table-link" onClick={() => onOrdersTracksUpdate(ordTrksInfo)}/></td>
            <td><BiTrash className="Table-link" onClick={() => onDeleteOrderedTrack(ordTrksInfo.orderedTrackID)}/></td>
        </tr>
      </>
    );
}

export default OrderedTrack;
