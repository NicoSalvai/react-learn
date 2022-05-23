import './memeform.css'

export default function MemeForm() {
    return (
        <form className="meme-form">
            <input type="text" id="first-text"/>
            <input type="text" id="second-text"/>
            <button>Get a new meme image</button>
        </form>
    )
}