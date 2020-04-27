import React from 'react';

// Styles
import './Footer.styles.scss';

// Assets
import osteriaLogo from "../../assets/osteria_logo_yellow.svg";
import facebookYellow from "../../assets/fb_logo_yellow.svg";
import instaYellow from "../../assets/insta_logo_yellow.svg";

const Footer = () => (
    <footer>
        <div className="info">
            <div className="contact">
                <h3>Contact us</h3>
                <a 
                    href="https://www.google.com/maps/place/Osteria+la+Vignetta/@45.7428248,9.1321622,17z/data=!3m1!4b1!4m5!3m4!1s0x478698e21092c0cd:0x3bf1a2021463375c!8m2!3d45.7428248!4d9.1343509" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Via Ettore Brambilla, 23, 22063 Cantù CO, Italy
                    </a>
                <a href="tel:+39031706286">+39 031 706286</a>
            </div>
            <div className="instagram">
                <h3>Instagram</h3>
                <p>TBA</p>
            </div>
        </div>
        <div className="sign-off">
            <img src={osteriaLogo} alt="Osteria la Vignetta" className="logo" />
            <div className="social-icons">
                <a href="https://www.facebook.com/osteria.lavignetta" target="_blank" rel="noopener noreferrer">
                    <img src={facebookYellow} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/osterialavignetta/" target="_blank" rel="noopener noreferrer">
                    <img src={instaYellow} alt="instagram" />
                </a>
            </div>
        </div>
    </footer>
)

export default Footer;