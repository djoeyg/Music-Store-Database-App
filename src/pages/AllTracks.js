import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/*import allTracks from '../data/allTracksData.js';*/
import AllTracksList from '../components/allTracksList';
/*import AddNewTrack from '../components/addTrack';*/
import NavBar from '../components/navBarLinks';

function AllTracks({ setTrackToEdit }) {

  const [trackTitle, setTrackTitle] = useState('');
  const [trackLength, setTrackLength] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const formValues = { trackTitle, trackLength, retailPrice, releaseDate };
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, SetFormErrors] = useState({});

  const [searchTerm, setSearchTerm] = useState('');
  const [allTracks, setTracks] = useState([]);
  const history = useHistory();

  const addTrack = async () => {
    const newTrack = { trackTitle, trackLength, retailPrice, releaseDate };
    const response = await fetch('/api/insert-track', {
        method: 'POST',
        body: JSON.stringify(newTrack),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      /*alert("Track information successfully added");*/
      console.log(response.status);
      loadTracks();
    } else {
        alert(`Unable to add new track information, status code = ${response.status}`);
    };
  };

  const onDeleteTrack = async _id => {
    const response = await fetch(`/api/delete-track/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Unable to delete Track with _id = ${_id}, status code = ${response.status}`);
    } else {
        loadTracks();
    };
  };

  const onEdit = trackToEdit => {
    setTrackToEdit(trackToEdit);
    history.push("/edit-track");
  }

  const loadTracks = async () => {
    const response = await fetch('/api/get-tracks', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    });
    const data = await response.json();
    setTracks(data);
  };

  useEffect(() => {
      loadTracks();
  }, []);

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
        addTrack();
        setIsSubmit(false);
    };
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
      <h2>All Available Music Tracks</h2>
        <div className="App-header">
          <p>Search Track by matching text</p>
            <span>
            <input type="text" 
                placeholder="Search..."
                onChange={e => {setSearchTerm(e.target.value)}}/>
            </span>
            <div>
            <h4>Insert Information for New Track </h4>
            <table id="anti-td">
              <tr id="anti-td">
                <td id="anti-td">
                  <input id="anti-td"
                    type="text"
                    value={trackTitle}
                    placeholder="Track Title"
                    onChange={e => setTrackTitle(e.target.value)} />
                  <p class="form-error">{formErrors.title}</p>
                </td>
                <td id="anti-td">
                  <input id="anti-td"
                    type="text"
                    value={trackLength}
                    placeholder="Track Length hh:mm:ss"
                    onChange={e => setTrackLength(e.target.value)} />
                  <p class="form-error">{formErrors.invalidtime}</p>
                </td>
                <td id="anti-td">
                  <input id="anti-td"
                    type="text"
                    value={retailPrice}
                    placeholder="Price $0.00"
                    onChange={e => setRetailPrice(e.target.value)} /> 
                  <p class="form-error">{formErrors.invalidPrice}</p>   
                </td>
                <td id="anti-td">
                  <input id="anti-td"
                    type="text"
                    value={releaseDate}
                    placeholder="Release Date YYYY-MM-DD"
                    onChange={e => setReleaseDate(e.target.value)} />
                  <p class="form-error">{formErrors.invalidDate}</p>
                </td>
                <td id="anti-td">
                  <button onClick={handleSubmit}>Add to Tracks</button>
                </td>
              </tr>
            </table>
            <br></br>
            </div>
            <AllTracksList availableTracks={allTracks.filter(val => {
              if (searchTerm === '') {
                return val;
              } else if (
                  val.trackID.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.trackTitle.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.trackLength.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.retailPrice.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.releaseDate.toString().toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
          })} onEdit={onEdit} onDeleteTrack={onDeleteTrack}></AllTracksList>
            <br></br>
        </div>
    </div>
    </>
  );
}

export default AllTracks;