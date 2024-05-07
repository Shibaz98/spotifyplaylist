import { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Spotify from './util/Spotify';


function App() {

  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]); 

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

  const removeTrack = (track) =>{ 
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id))
  }; // when called, it takes the track selectd, calls all previous tracks, filters through them, the current track is then returned if it does not match current tracks id > so essentially return all tracks except the one I clicked to remove it

  const updatePlaylistName = (name) =>{
    setPlaylistName(name); 
  }

  const savePlaylist = () =>{
    const trackUris = playlistTracks.map((track) => track.uri); // maps through playlistTracks to acess each tracks URI number via track.uri dot notation
    Spotify.savePlaylist(playlistName, trackUris).then(() =>{ // accesses the Spotify object's savePlaylist function to save playlist 
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);   //Once saved to spotify it resets the play list name and the play list tracks 
    })
  }; 

  return (
    <div>
      <h1 className='highlight'>Spotify Playlist App</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>  
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/> 
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
