import { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {

  const[searchResults, setSearchResults] = useState([]); 

  const search = useCallback((term) =>{
    console.log(term)
  })


  return (
    <div>
      <h1 className='highlight'>Spotify Playlist App</h1>
      <div className='App'>
        <SearchBar onSearch={search}/>  
        <div className='App-playlist'>
          <SearchResults/> 
        </div>
      </div>
    </div>
  );
}

export default App;
