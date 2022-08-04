import { Link, useLocation } from "react-router-dom";

import "./style/Navbar.css"
function Home() {
    return (useLocation().pathname === "/" ? 
        <Link to="/" className="NavbarBadge" onClick={ (event) =>event.preventDefault()}>meow</Link> :
        <Link to="/" className="NavbarBadge">meow</Link>
    );
}
function Skins() {
    return (useLocation().pathname === "/skins" ? 
        <Link to="/skins" className="NavbarButton" onClick={ (event) =>event.preventDefault()}>Skins</Link> :
        <Link to="/skins" className="NavbarButton">Skins</Link>
    );
}
function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <Home />
                <Skins />
            </div>
        </div>
    )
}

export default Navbar;