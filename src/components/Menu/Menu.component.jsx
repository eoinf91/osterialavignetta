import React from 'react';

// styles
import './Menu.styles.scss';

// Assets
import risottoCutImage from '../../assets/risotto_cut.png';

const Menu = () => (
    <div className="menu">
        <div className="menu-container">
            <div className="menu-content">
                <h3>Our Menu</h3>
                <p>We use the freshest ingredients in all our recipes, so we are constantly updating our menu based on what is fresh.</p>
            </div>
            <div className="menu-images">
                <img src={risottoCutImage} alt="vino" />
            </div>
        </div>
    </div>
)

export default Menu;