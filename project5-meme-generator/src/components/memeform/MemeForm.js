import './memeform.css'
import memeService from '../memes/memes'
import React from 'react';

export default function MemeForm() {
    const [memeUrl, setMemeUrl] = React.useState()

    function getNewMemeImage(){
        let randomMemeIndex = parseInt(memeService.data.memes.length * Math.random());
        setMemeUrl(memeService.data.memes[randomMemeIndex].url)
    }

    return (
        <div className="meme-form">
            <input type="text" id="first-text"/>
            <input type="text" id="second-text"/>
            <button onClick={getNewMemeImage}>Get a new meme image</button>
            <img src={memeUrl}/>
        </div>
    )
}