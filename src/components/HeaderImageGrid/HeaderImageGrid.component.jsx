import React from 'react';

// Styles
import './HeaderImageGrid.styles.scss';

// Assets
import imageInside from '../../assets/header/inside@2x.jpg';
import imageMeat from '../../assets/header/meat@2x.jpg';
import imageMeatTwo from '../../assets/header/meat_2@2x.jpg';
import imageRavioli from '../../assets/header/ravioli@2x.jpg';
import imageRisotto from '../../assets/header/risotto@2x.jpg';
import imageWineTable from '../../assets/header/wine_table@2x.jpg';

const HeaderImageGrid = () => (
    <div className="header-image-grid">
        <img src={imageWineTable} alt="Vino" />
        <img src={imageInside} alt="Osteria" />
        <img src={imageRisotto} alt="Risotto" />
        <img src={imageMeat} alt="Carne" />
        <img src={imageMeatTwo} alt="Carne" />
        <img src={imageRavioli} alt="Ravioli" />
    </div>
)

export default HeaderImageGrid;