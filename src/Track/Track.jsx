import "./Track.css";

const Track = (props) =>{

    const addTrack = () =>{
        props.onAdd(props.track)
    };

    const removeTrack = () =>{
        props.onRemove(props.track)
    }; 


    const renderAction = () =>{
        if(props.isRemoval) { // since isRemoval from Playlist.jsx is true, this will return a - sign for all tracks that are displayed in the playlist section 
            return(
                <button className="Track-action" onClick = {removeTrack}>
                    - 
                </button>
            );
        }
        return(
            <button className="Track-action" onClick = {addTrack}>
                +
            </button> // the default behaviour is to always return a + sign, as for search results we will need a + sign to indicate adding to a playlist
        )
    };
    
    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}    
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track; 