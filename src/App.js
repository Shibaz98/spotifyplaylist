import { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Spotify from './util/Spotify';
import Preview from './Preview/Preview';


function App() {

  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [preview, setPreview] = useState([]);
  const [sample, setSample] = useState([]);
  const [image, setImage] = useState('');

// work on track component and understand how the render action works with the removal and addition 

const search = useCallback((term) => {
  Spotify.search(term).then(setSearchResults);
}, []);

const addTrack = useCallback(
  (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);

const removeTrack = useCallback((track) => {
  setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
  );
}, []); // when called, it takes the track selectd, calls all previous tracks, filters through them, the current track is then returned if it does not match current tracks id > so essentially return all tracks except the one I clicked to remove it

 
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const onPreview = (track) =>{
    setPreview(track)
  }; 

  const getSample = useCallback((id) =>{
    Spotify.getPreview(id).then(setSample)
  }, [])



  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1 className='highlight'>Spotify Playlist App</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>  
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} addPreview={onPreview} getSample={getSample}/> 
          <Preview track={preview} sample={sample}/>
          <Playlist 
          playlistName={playlistName}  //done
          playlistTracks={playlistTracks} //done
          onNameChange={updatePlaylistName} //done
          onSave = {savePlaylist} // done
          onRemove = {removeTrack}/> 
          
        </div>
      </div>
    </div>
  );
}

export default App;
