import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import allTracks from '../data/allTracksData.js';
import AllTracksList from '../components/allTracksList';
import AddNewTrack from '../components/addTrack';
import React from 'react';

function AllTracks({ setTrackToEdit}) {

  const history = useHistory();

  const onEdit = trackToEdit => {
    setTrackToEdit(trackToEdit);
    history.push("/edit-track");
  }

  return (
    <>
    <div className="body">
        <h2>All Available Music Tracks</h2>
        <div className="App-header">
            <AddNewTrack></AddNewTrack>
            <AllTracksList availableTracks={allTracks} onEdit={onEdit} ></AllTracksList>
            <br></br>
        </div>
        <Link className="App-link" to="/">Return to Home</Link>
    </div>
    </>
  );
}

export default AllTracks;