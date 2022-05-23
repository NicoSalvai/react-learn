import './header.css'
import trollface from '../../images/trollface.png'

export default function Header() {
    return (
        <div className="header">
            <img src={trollface}></img>
            <h1>Meme generator</h1>
            <h3>React Course - Project 3</h3>
        </div>
    )
}