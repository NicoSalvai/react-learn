import logo from "../../logo.svg"
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} className="logoImg" alt="React logo"/>
                <h2>React Facts</h2>
            </div>
            <p><b>React Course - Project 1</b></p>
        </nav> 
    )
}

export default Navbar;