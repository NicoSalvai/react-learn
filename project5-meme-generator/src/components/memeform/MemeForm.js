import './memeform.css'
import memeService from '../memes/memes'
import React from 'react';
import MemeImage from '../MemeImage/memeimage';

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    function getNewMemeImage(){
        let randomMemeIndex = parseInt(memeService.data.memes.length * Math.random());
        setMeme(prevMeme => ({
            ...prevMeme,
            url: memeService.data.memes[randomMemeIndex].url
        }))
    }

    function textChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }



    return (
        <div className="meme-form">
            <input 
                type="text" 
                id="topText"
                name="topText"
                value={meme.topText}
                onChange={textChange}
            />
            <input 
                type="text" 
                id="bottomText"    
                name="bottomText"    
                value={meme.bottomText}
                onChange={textChange}
            />
            <button onClick={getNewMemeImage} className="meme-form-button">Get a new meme image</button>
            <MemeImage {...meme}/>
        </div>
    )
}