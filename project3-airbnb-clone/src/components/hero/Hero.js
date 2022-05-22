import './hero.css'
import hero from '../../images/hero.png'

function Hero() {
    return (
        <div className="hero">
            <img src={hero} className="hero--img"></img>
            <h1>Online Experiencies</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero;