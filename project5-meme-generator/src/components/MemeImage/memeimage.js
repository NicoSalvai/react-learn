import React from 'react';
import './memeimage.css';

function MemeImage(props){ 
  
  return (
    <div className="meme">
      <img src={props.url} className="meme--image"/>
      {props.topText && <h2 className="meme--text top">{props.topText}</h2>}
      {props.bottomText && <h2 className="meme--text bottom">{props.bottomText}</h2>}
    </div>
  )
}

export default MemeImage;
