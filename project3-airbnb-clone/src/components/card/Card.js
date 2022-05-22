import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card(props){
    
    let badgeText ="";
    if(props.card.openSpots === 0){
        badgeText = "sold out";
    }
    else if(props.card.location === "Online"){
        badgeText = "online";
    }

    return (
        <div className="card">
            { badgeText && <span className="card--tag">{badgeText}</span>}
            <img src={props.card.img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> {props.card.stats.rating} <span className="gray--text">({props.card.stats.reviewCount}) - {props.card.location} </span></p>
                <p>{props.card.title}</p>
                <p><b>From ${props.card.price}</b> / person</p>
            </div>
        </div>
    )
}