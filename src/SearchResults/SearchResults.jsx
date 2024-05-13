import "./SearchResults.css"; 
import TrackList from "../Tracklist/TrackList";

const SearchResults = (props) =>{
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd} addPreview={props.addPreview} getSample={props.getSample}/>
        </div>
    );
};

export default SearchResults; 