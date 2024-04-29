import { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([]); 
  const [playlistName, setPlaylistName] = useState('')

  const search = useCallback((term) =>{
    console.log(term)
  });

  const updatePlaylistName = (name) =>{
    setPlaylistName(name); 
  }


  return (
    <div>
      <h1 className='highlight'>Spotify Playlist App</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>  
        <div className='App-playlist'>
          <SearchResults /> 
          <Playlist playlistName={playlistName} onNameChange={updatePlaylistName}/>
        </div>
      </div>
    </div>
  );
}

export default App;
