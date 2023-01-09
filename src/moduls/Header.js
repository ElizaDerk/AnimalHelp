import {useState} from "react";

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return(
        <div className="navigation">
            <div className="nav-items">
                <a href="#t1" className="nav-item">About us</a>
                <a href="#t2" className="nav-item">Photos</a>
                <a href="#t3" className="nav-item">Form</a>
                <a href="#t4" className="nav-item">Contact</a>
            </div>

            <nav className="navBar">
                <button onClick={handleToggle}>{navbarOpen ? "x" : "="}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : " "}`}>
                    <a href="#t1" className="nav-item">About us</a>
                    <a href="#t2" className="nav-item">Photos</a>
                    <a href="#t3" className="nav-item">Form</a>
                    <a href="#t4" className="nav-item">Contact</a>
                </ul>
            </nav>

            {/*<div className="mobile-action-btn">*/}
            {/*    <button className="btn-burger" onClick={handleToggle}>*/}
            {/*        {navbarOpen ? "Close" : "Open"}*/}
            {/*        <span className="burger"></span>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Header;
