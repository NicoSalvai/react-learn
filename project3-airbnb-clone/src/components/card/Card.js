import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card(props){
    
    let badgeText ="";
    if(props.openSpots === 0){
        badgeText = "sold out";
    }
    else if(props.country === "Online"){
        badgeText = "online";
    }

    return (
        <div className="card">
            { badgeText && <span className="card--tag">{badgeText}</span>}
            <img src={props.img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> {props.stars} <span className="gray--text">({props.reviews}) - {props.country} </span></p>
                <p>{props.desc}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}