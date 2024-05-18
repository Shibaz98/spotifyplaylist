import './PreviewTrack.css'; 

const PreviewTrack = (props) =>{

    if(!props.sample.album){
        return<div>Choose a track to preview</div>
    }

    let imageUrl = props.sample.album.images[0].url
    let audioUrl = (props.sample.preview_url)

    return(
        <div className='preview-container'>
            <div className="preview-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}    
                </p>
                <img src={imageUrl}/>
                <audio controls>
                    <source src={audioUrl} type='audio/mpeg'/>
                </audio>
            </div>
        </div>
    )
}; 

export default PreviewTrack; 

//
// 