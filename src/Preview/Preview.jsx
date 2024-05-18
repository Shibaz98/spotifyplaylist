import "./Preview.css";
import PreviewTrack from "../PreviewTrack/PreviewTrack";

const Preview = (props) =>{

    return(
        <div className="Preview">
            <h1>Currently Previewing:</h1>
            <PreviewTrack track={props.track} sample={props.sample}/>
        </div>
    );
};

export default Preview; 