import React from "react";

// Assets
import osteriaGrapesGrey from "../../assets/osteria_grapes_grey.svg";
import facebookGrey from "../../assets/fb_logo_grey.svg";
import instaGrey from "../../assets/insta_logo_grey.svg";

// Styles
import "./Header.styles.scss";

const Header = () =>(
    <header>
        <img src={osteriaGrapesGrey} alt="Osteria la Vignetta" className="logo" />
        <div className="name">
            <h1>Osteria La Vignetta</h1>
            <h3>Cucina Lariana</h3>
        </div>
        <div className="social-icons">
            <a href="https://www.facebook.com/osteria.lavignetta" target="_blank" rel="noopener noreferrer">
                <img src={facebookGrey} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/osterialavignetta/" target="_blank" rel="noopener noreferrer">
                <img src={instaGrey} alt="instagram" />
            </a>
        </div>
    </header>
)

export default Header;