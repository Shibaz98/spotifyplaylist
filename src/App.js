import { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]); 

//Today work on Playlist and Tracklist component, understand how it interacts with Playlisttracks state setter 


  const search = (term) =>{
      setSearchResults(term);  // to edit later with api 
      
  };

  const addTrack = (track) =>{
    if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
    return;
    
   setPlaylistTracks((prev) => [...prev, track]) 
  }; 

  const updatePlaylistName = (name) =>{
    setPlaylistName(name); 
  }

  const savePlaylist = () =>{
    const trackUris = playlistTracks
  }; 


  return (
    <div>
      <h1 className='highlight'>Spotify Playlist App</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>  
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/> 
          <Playlist 
          playlistName={playlistName} 
          onNameChange={updatePlaylistName}
          onSave = {savePlaylist}/>
        </div>
      </div>
    </div>
  );
}

export default App;
