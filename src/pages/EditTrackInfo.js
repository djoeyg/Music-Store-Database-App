import React, { useState } from 'react';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const EditTrackInfo = ({ trackToEdit }) => {

    const _id = trackToEdit.trackID
    const originalDate = trackToEdit.releaseDate

    // Method for formatting JS timestamp data: https://www.cloudhadoop.com/reactjs-convert-timestamp-date/
    const formatedDate = moment(originalDate).format("YYYY-MM-DD");

    const [trackTitle, setTrackTitle] = useState(trackToEdit.trackTitle);
    const [trackLength, setTrackLength] = useState(trackToEdit.trackLength);
    const [retailPrice, setRetailPrice] = useState(trackToEdit.retailPrice);
    const [releaseDate, setReleaseDate] = useState(formatedDate);

    const history = useHistory();

    const editTrack = async () => {
        const editedTrack = { trackTitle, trackLength, retailPrice, releaseDate, _id};
        const response = await fetch(`/api/update-track/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(editedTrack),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Track information successfully updated");
        } else {
            alert(`Failed to update track information, status code = ${response.status}`);
        }
        history.push("/all-tracks");
    };

    return (
      <div className="body">
        <h1>Edit Track Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Track Title:</td>
                        <td><input
                                type="text"
                                value={trackTitle}
                                onChange={e => setTrackTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Length:</td>
                        <td><input
                                type="text"
                                value={trackLength}
                                onChange={e => setTrackLength(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Retail Price:</td>
                        <td><input
                                type="text"
                                value={retailPrice}
                                onChange={e => setRetailPrice(e.target.value)} /></td> 
                    </tr>
                    <tr>
                        <td>Release Date:</td>
                        <td><input
                                type="text"
                                value={releaseDate}
                                onChange={e => setReleaseDate(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={editTrack}>Save Changes to Track Info
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/all-tracks">Cancel and Return to Tracks Page</Link>
      </div>
    );
}

export default EditTrackInfo;