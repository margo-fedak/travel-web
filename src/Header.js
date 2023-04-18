import LightButton from "./LightButton";

function Header(){
    return(
        <div className="header">
            <div className="navigation">
                <nav>
                    <a className="head-button" href="#">Home</a>
                    <a className="head-button" href="#">Guides</a>
                    <a className="head-button" href="#">Flight</a>
                    <a className="head-button" href="#">About</a>
                </nav>
            </div>
            <div>
                <LightButton button="Contact Us"/>
            </div>
        </div>
    )
}

export default Header