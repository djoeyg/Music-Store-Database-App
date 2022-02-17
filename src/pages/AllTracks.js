import '../App.css';
import { useHistory } from 'react-router-dom';
import allTracks from '../data/allTracksData.js';
import AllTracksList from '../components/allTracksList';
import AddNewTrack from '../components/addTrack';
import NavBar from '../components/navBarLinks';
import React from 'react';

function AllTracks({ setTrackToEdit}) {

  const history = useHistory();

  const onEdit = trackToEdit => {
    setTrackToEdit(trackToEdit);
    history.push("/edit-track");
  }

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
      <h2>All Available Music Tracks</h2>
        <div className="App-header">
            <AddNewTrack></AddNewTrack>
            <AllTracksList availableTracks={allTracks} onEdit={onEdit} ></AllTracksList>
            <br></br>
        </div>
    </div>
    </>
  );
}

export default AllTracks;