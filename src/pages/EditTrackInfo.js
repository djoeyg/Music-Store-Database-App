import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const EditTrackInfo = ({ trackToEdit }) => {

    const [trackTitle, setTrackTitle] = useState(trackToEdit.trackTitle);
    const [trackLength, setTrackLength] = useState(trackToEdit.trackLength);
    const [retailPrice, setRetailPrice] = useState(trackToEdit.retailPrice);
    const [releaseDate, setReleaseDate] = useState(trackToEdit.releaseDate);

    const history = useHistory();

    const editTrack = async () => {
        /*const editedRecipe = { _id, title, imgUrl, directions, description, rating, notes, ideas, ingredients, prepTime, cookTime, totalTime };
        const response = await fetch(`/recipes/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Customer successfully updated");
        } else {
            alert(`Failed to update customer, status code = ${response.status}`);
        }*/
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