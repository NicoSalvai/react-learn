import './banner.css'
import {IoLocationSharp} from 'react-icons/io5'

export default function Banner(props) {
    return (
        <div className="banner">
            <img src={props.imageUrl}></img>
            <div className='banner-content'>
                <div className="banner-location">
                    <span><IoLocationSharp/> {props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" className='elipsis'>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className='elipsis'>{props.description}</p>
            </div>
        </div>
    )
}