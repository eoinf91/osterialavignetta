import React from 'react';

// styles
import './Welcome.styles.scss';

// Assets
import wineImage from '../../assets/header/wine_table@2x.jpg';
import risottoImage from '../../assets/header/risotto@2x.jpg';

const Welcome = () => (
    <div className="welcome">
        <div className="welcome-container">
            <div className="welcome-content">
                <h3>Welcome</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
            </div>
            <div className="welcome-images">
                <img src={wineImage} alt="vino" />
                <img src={risottoImage} alt="risotto" />
            </div>
        </div>
    </div>
)

export default Welcome;