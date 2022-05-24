import React from 'react';
import './memeimage.css';

function MemeImage(props){ 
  
  return (
    <div className="meme--image">
      <img src={props.url}/>
    </div>
  )
}

export default MemeImage;
