import pic from '../../images/pic.jpg'
import {FaMailBulk, FaLinkedin} from 'react-icons/fa'

function Info(){
    return (
        <div className="container container--info">
            <img src={pic} className="info--pic"></img>
            <h1>Nicolas Salvai</h1>
            <h4>Fullstack Developer</h4>
            <div className="container-flex">
                <button className='info--email'> <FaMailBulk /> Email</button>
                <button className='info--linkedin'> <FaLinkedin/> LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;