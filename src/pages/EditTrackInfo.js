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

    const formValues = { trackTitle, trackLength, retailPrice, releaseDate };
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, SetFormErrors] = useState({});
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
            /*alert("Track information successfully updated");*/
            history.push("/all-tracks");
        } else {
            alert(`Unable to update track information, status code = ${response.status}`);
        }
    };

    const validate = (values) => {

        // regex time validation:
        // https://stackoverflow.com/questions/8318236/regex-pattern-for-hhmmss-time-string
    
        // regex date validation:
        // https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd
    
        const errors = {};
        const timeRegEx = /^$|^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
        const dateRegEx = /^$|^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        
        if (!values.trackTitle) {
            errors.title = "Required";
        }
        if (values.retailPrice < 0 | values.retailPrice > 9.99) {
            errors.invalidPrice = "Invalid Dollar Amount";
        }
        if (!timeRegEx.test(values.trackLength)) {
          errors.invalidtime = "Invalid Time Value";
        }
        if (!dateRegEx.test(values.releaseDate)) {
          errors.invalidDate = "Invalid Date Value";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SetFormErrors(validate(formValues));
        setIsSubmit(true);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            editTrack();
            setIsSubmit(false);
        };
    };

    return (
      <div className="body">
        <h1>Edit Track Information</h1>
        <div className="App-header">
            
            <br></br>
            
            <table className="table">
                <tbody>
                    <tr>
                        <td>Track Title:<p class="form-error">{formErrors.title}</p></td>
                        <td><input
                                type="text"
                                value={trackTitle}
                                onChange={e => setTrackTitle(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Length:</td>
                        <td><input
                                type="text"
                                value={trackLength}
                                onChange={e => setTrackLength(e.target.value)} />
                            <p class="form-error">{formErrors.invalidtime}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Retail Price:</td>
                        <td><input
                                type="text"
                                value={retailPrice}
                                onChange={e => setRetailPrice(e.target.value)} />
                            <p class="form-error">{formErrors.invalidPrice}</p>
                        </td> 
                    </tr>
                    <tr>
                        <td>Release Date:</td>
                        <td><input
                                type="text"
                                value={releaseDate}
                                onChange={e => setReleaseDate(e.target.value)} />
                            <p class="form-error">{formErrors.invalidDate}</p>
                        </td>
                    </tr>
                </tbody>
            </table> 
            
            <br></br>
            <button
                onClick={handleSubmit}>Save Changes to Track Info
            </button>
            <br></br>
        </div>
        <Link className="App-link" to="/all-tracks">Cancel and Return to Tracks Page</Link>
      </div>
    );
}

export default EditTrackInfo;