import './PreviewTrack.css'; 

const PreviewTrack = (props) =>{

    if(!props.sample.album){
        return<div>Choose a track to preview</div>
    }

    let imageUrl = props.sample.album.images[0].url

    return(
        <div>
            <div className="preview-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}    
                </p>
                <img src={imageUrl}/>
            </div>
        </div>
    )
}; 

export default PreviewTrack; 

//
// 