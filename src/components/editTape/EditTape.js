import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MixtapeSong from '../mixtapeSong/MixtapeSong.js';
import { getLastEditedMixtape } from '../../selectors/editedMixtapeSelectors.js';
import { saveMixtape } from '../../actions/editedMixtapeActions.js';
import { getUser } from '../../selectors/userSelectors.js';

export default function EditTape() {
  const user = useSelector(getUser);
  const mixtape = useSelector(getLastEditedMixtape);
  const dispatch = useDispatch();

  //each song comes from search result section
  //Has a nativeId, native source, and title
  
  let mixtapeSongs;
  if(mixtape.songs.length !== 0){
    mixtapeSongs = mixtape.songs.map(song => (
      <li key={song.nativeId} className="song-item">
        <MixtapeSong data={song} />
      </li>
    ));
  }

  // let mixtapeSongs;
  // useEffect(() => {
  //   mixtapeSongs = mixtape.songs.map(song => (
  //     <li key={song.nativeId}>
  //       <MixtapeSong data={song} />
  //     </li>
  //   ));
  // }, [mixtape]);

  const handleSave = () => {
    mixtape.createdBy = user.username;
    mixtape.userId = user._id;
    dispatch(saveMixtape(mixtape));
  };

  const handleNameChange = ({ target }) => {
    mixtape.mixtapeName = target.value;
  };

  return (
    <>
      <input type='text' placeholder='Mixtape Name' onChange={handleNameChange} value={mixtape.name} />
      <ul className="mixtape-songs">
        {mixtapeSongs ? mixtapeSongs : 'Oh no! An empty playlist! You should probably add some songs.'}
      </ul>
      {/* <p>each song should be reorderable within the list</p>
      <p>each song can be deleted</p> */}
      <button className="button-primary" onClick={handleSave}>Save</button>
      {/* <p>Save button should post playlist to DB</p>
      <p>Save button should redirect to the mixtape detail page</p> */}
    </>
  );
}
