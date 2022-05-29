import './memeform.css'
import React from 'react';
import MemeImage from '../MemeImage/memeimage';

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    function getNewMemeImage(){
        let randomMemeIndex = parseInt(allMemes.memes.length * Math.random());
        setMeme(prevMeme => ({
            ...prevMeme,
            url: allMemes.memes[randomMemeIndex].url
        }))
    }

    function textChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])



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