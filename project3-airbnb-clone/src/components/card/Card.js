import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card(){
    return (
        <div className="card">
            <span className="card--tag">sold out</span>
            <img src={img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> 5.0 <span className="gray--text">(6) - USA </span></p>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </div>
        </div>
    )
}