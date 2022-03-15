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
    if (response.status !== 200) {
        alert(`Failed to add new track, status code = ${response.status}`);
      }
    loadTracks();
  };

  const onDeleteTrack = async _id => {
    const response = await fetch(`/api/delete-track/${_id}`, { method: 'DELETE' });
    if (response.status !== 200) {
        alert(`Failed to delete Track with _id = ${_id}, status code = ${response.status}`);
      }
    loadTracks();
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
}

useEffect(() => {
    loadTracks();
}, []);

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
            <input
                type="text"
                value={trackTitle}
                placeholder="Track Title"
                onChange={e => setTrackTitle(e.target.value)} />
            
            <input
                type="text"
                value={trackLength}
                placeholder="Track Length hh:mm:ss"
                onChange={e => setTrackLength(e.target.value)} />
            
            <input
                type="text"
                value={retailPrice}
                placeholder="Price $0.00"
                onChange={e => setRetailPrice(e.target.value)} />    

            <input
                type="text"
                value={releaseDate}
                placeholder="Release Date YYYY-MM-DD"
                onChange={e => setReleaseDate(e.target.value)} />
            
            <button
                onClick={addTrack}
            >Add to Tracks</button>
            <br></br><br></br>
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