import './card.css'
import img from '../../images/carrousel/carrousel1.png'
import {FaStar} from 'react-icons/fa'

export default function Card({status, img, stars, nationality, desc, price}){
    return (
        <div className="card">
            <span className="card--tag">{status}</span>
            <img src={img} className="card--img"></img>
            <div className="card--content">
                <p><FaStar /> {stars} <span className="gray--text">{nationality} </span></p>
                <p>{desc}</p>
                <p><b>{price}</b> / person</p>
            </div>
        </div>
    )
}