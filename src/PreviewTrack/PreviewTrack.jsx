import './PreviewTrack.css'; 

const PreviewTrack = (props) =>{

    if(!props.sample.album){
        return<div>Choose a track to preview</div>
    }

    let imageUrl = props.sample.album.images[0].url
    let audioUrl = props.sample.preview_url;

    const key = audioUrl ? audioUrl : 'no-audio' // added this to the Audio tag to force the audio tag to re render, without it react will not re render the audio tag this is because audio will not re render on the basis of <source>'s audioUrl prop changing 
    
    return(
      <div>
        <div className='preview-container'>
            <div className="preview-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}    
                </p>
                <img src={imageUrl}/>
                <audio key={key} controls>
                    <source src={audioUrl} type='audio/mpeg'/>
                </audio>
            </div>
        </div>
      </div>  
    )
}; 

export default PreviewTrack; 

//
// 


