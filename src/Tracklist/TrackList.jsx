import "./TrackList.css"
import Track from "../Track/Track";

const TrackList = (props) => {
    return (
      <div className="TrackList">
        {props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={props.onAdd}
              isRemoval={props.isRemoval}
              onRemove={props.onRemove}
              addPreview={props.addPreview}
            />
          );
        })}
      </div>
    );
  };

export default TrackList; 