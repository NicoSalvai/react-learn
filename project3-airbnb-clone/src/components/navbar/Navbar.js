import airbnb from '../../images/airbnb.png'
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnb} className="navbar--logo"></img>
        </nav>
    )
}

export default Navbar;