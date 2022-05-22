import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card(props){
    return (
        <div className="card">
            { props.openSpots == 0 && <span className="card--tag">sold out</span>}
            <img src={props.img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> {props.stars} <span className="gray--text">({props.reviews}) - {props.country} </span></p>
                <p>{props.desc}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}