import React, { Component } from 'react';
import styles from './MyStory.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import aboutInfo from '../../assets/aboutInfo';



class MyStory extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div styleName="wrapper">
                <div styleName="about" className="container">
                    <span className="container">
                        <div className="row">
                            <h1>
                                My Story
                            </h1>
                        </div>
                    </span>
                </div>

                <div styleName="content-div">
                    <div styleName="section-div-first" >
                        <Image height="400px" withRadius path="about/other/headshot.jpg" />
                        {/* <img className="img-fluid" styleName= "header-img" alt="header-img" src={require(`./../../assets/images/about/other/headshot.jpg`)} ></img> */}
                        <p2>
                            {aboutInfo.general.description}
                        </p2>
                        <div className="row">
                            <Button margin="20px auto 0 auto" resume btnType="btnLarge" >View My Resume</Button>
                        </div>
                    </div>

                    <div styleName="section-div">
                            <h2>{aboutInfo.education.title}</h2>
                            <p2>
                                {aboutInfo.education.description}
                            </p2>
                        <Image height="30px" path="about/other/waterloo-engineering.png" />
                    </div>
                    
                    <div styleName="section-div"> 
                            <h2>{aboutInfo.experience.title}</h2>
                            <p2>
                                {aboutInfo.experience.description}
                            </p2>                       
                        <div className="row">
                            <Button margin="20px auto 0 auto" to="/projects/experience">View My Previous Experiences</Button>
                        </div>
                    </div>
                                   
                    <div styleName="section-div">
                            <h2>Hobbies</h2>
                            <p2>
                                {aboutInfo.hobbies.description}
                            </p2>                       
                    </div>


                    <div styleName="section-div" className="text-center">
                            <h2>Teams</h2>
                            <p2>
                                {aboutInfo.teams.description}
                            </p2>                       
                         <div styleName="img-row" className="row">
                            <span styleName="team" className="col-md-4">
                                <Image height="80px" path="about/teams/georgia.png" />
                            </span>
                            <span styleName="team" className="col-md-4">
                                <Image height="80px" path="about/teams/tml.png" />
                            </span>                        
                            <span styleName="team" className="col-md-4">
                                <Image height="80px" path="about/teams/raptors.png" />
                            </span> 
                        </div>
                    </div> 
                </div>
            </div>

        )
    }
};


export default CSSModules(MyStory, styles);