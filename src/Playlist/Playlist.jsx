import TrackList from "../Tracklist/TrackList";
import "./Playlist.css" 


const Playlist = (props) =>{
    
    const handleNameChange = (event) =>{
        props.onNameChange(event.target.value); 
    }; 
    


    return(
        <div className="Playlist">
            <input onChange = {handleNameChange} defaultValue={"New Playlist"}/> 
            <TrackList

            />
        </div>
    ); 
};

export default Playlist; 