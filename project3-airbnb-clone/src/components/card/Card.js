import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card(props){
    return (
        <div className="card">
            <span className="card--tag">{props.status}</span>
            <img src={props.img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> {props.stars} <span className="gray--text">{props.nationality} </span></p>
                <p>{props.desc}</p>
                <p><b>{props.price}</b> / person</p>
            </div>
        </div>
    )
}