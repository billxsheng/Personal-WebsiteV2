import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';


const aboutPreview = (props) => (
    <div styleName='aboutPreview'>
        <span className="container">
            <h1>About</h1>
            <h3 id="hero"></h3>
        </span>
    </div>
)

export default CSSModules(aboutPreview, styles);