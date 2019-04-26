import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hero.css';
import MainButtonRow from '../../../../components/Button/MainButtonRow/MainButtonRow';
import Image from '../../../../components/Image/Image';

const Hero = (props) => {
    const waveStyle = {
        'width': '120px',
        'height': 'auto'
    }
    

    return (
        <div styleName='hero'>
            <span className="container">
                <div className="row" styleName="main-title">
                    <h5>
                    <span><img styleName="wave" alt="wave" style={waveStyle} src={require('../../../../assets/images/other/wave.png')}></img></span>
                    &nbsp;
                    Hey, I'm Bill!
                    </h5>
                </div>
            </span>
            <div styleName="stripe"/>    
            <div styleName="stripe-reflected"/>  
            <div className="container" styleName="divide-container">
               <div styleName="upper-wrapper" >
                <div styleName="img-wide">
                    <Image top="0px" path="about/other/secondary.jpeg"  />
                </div>
                <div styleName="img-narrow">
                    <Image top="0px" path="about/other/secondary-mobile.jpeg"  />
                </div>
               </div>
               <div styleName="lower-wrapper" >
                    <MainButtonRow/>
               </div>
            </div>
        </div>
        
    )
}

export default CSSModules(Hero, styles,{allowMultiple: true});