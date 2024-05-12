import "../assets/styles/Navigation.css"
import { Link } from "react-router-dom"
export function Navigation(){

    return(
        <>
        <nav className="ham-menu">
            <ul className="ul-for-sidebar">
                <Link to="/"><i className="fa-solid fa-house ham-menu_li_image"></i>
                <li className="ham-menu_li">Home</li></Link>
                <Link to="/about"><li className="ham-menu_li">About</li></Link>
                <img className="ham-menu_li_image"src="src\Images\youtube-shorts-logo-15252.png"></img>
                <li className="ham-menu_li">Shorts</li>
                <img className="ham-menu_li_image" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3264373/subscriptions-icon-md.png"></img>
                <li className="ham-menu_li">Subscriptions</li>
                <img className="ham-menu_li_image" src="https://www.iconpacks.net/icons/1/free-youtube-icon-105-thumb.png"></img>
                <li className="ham-menu_li">You</li>
            </ul>
        </nav>
        <div className="off-screen-menu">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        </>
    )
}