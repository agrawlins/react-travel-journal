import GlobeLogo from "../Images/globe.png";

const Navbar = () => {
    return(
        <nav className="header-contents">
            <img src={GlobeLogo} alt="Globe Logo" className="globe-logo"></img>
            <h3 className="header-text">My Travel Journal</h3>
        </nav>
    )
}

export default Navbar;