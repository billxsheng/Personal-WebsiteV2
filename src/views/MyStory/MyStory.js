import React, { Component } from 'react';
import styles from './MyStory.css';
import CSSModules from 'react-css-modules';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import aboutInfo from '../../assets/aboutInfo';
import Fade from 'react-reveal/Fade';
import Aux from '../../hoc/HO-Aux/HO-aux';

class MyStory extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Aux>
                <div styleName="wrapper">
                    <Fade bottom>
                    <div className="container">
                        <span className="container">
                            <div className="row">
                                <h1>
                                    My Story
                                </h1>
                            </div>
                        </span>
                    </div>
                    </Fade>

                    <div styleName="content-div">
                        <Fade bottom>
                        <div>
                            <Image margin="0" height="400px" withRadius path="about/other/headshot.jpg" />
                            <p2>
                                {aboutInfo.general.description}
                            </p2>
                            <div className="row" >
                                <Button margin="20px auto 0 auto" to="/projects/experience">View My Previous Experiences</Button>
                            </div>
                            <div className="row" >
                                <Button margin="20px auto 0 auto" resume btnType="btnLarge" >View My Resume</Button>
                            </div>
                        </div>
                        </Fade>
                        <Fade bottom>
                        <div styleName="section-div"> 
                            <h2>{aboutInfo.education.title}</h2>
                            <p2>
                                {aboutInfo.education.description}
                            </p2>    
                            <Image width="600px" path="about/other/waterloo-engineering.png" />
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
                            <h2>{aboutInfo.skills.title}</h2>
                            <div style={{'margin': '0 auto'}}>
                                <ul styleName="skills-list list" className="list-group">
                                    <li>Languages: JavaScript, Java, Swift, Ruby, Python, HTML/CSS, Typescript, VBA, SQL</li>
                                    <li>Framework and Libraries: Node JS (Express JS & Socket.IO), Spring, Ruby on Rails, React JS, React Native, Angular 2+</li>
                                    <li>Cloud & Tools: MongoDB, MySQL, PostgreSQL, Xcode, Git, Docker, JIRA, VMWare, AWS, Postman</li>
                                    <li>Common: Testing (Unit & Integration), Object-Oriented Design, Data Structures & Algorithms, Data Analysis</li>
                                </ul>
                            </div>                       
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
                            <h2>{aboutInfo.hobbies.title}</h2>
                            <p2>
                                {aboutInfo.hobbies.description}
                            </p2>    
                            <ul styleName="list" className="list-group">
                                <li>Basketball</li>
                                <li>Ice Hockey</li>
                                <li>Ultimate Frisbee</li>
                                <li>College Football, NHL, NBA</li>
                                <li>Guitar</li>
                                <li>Side Projects</li>
                                <li>Reading</li>
                                <li>Finance (Investing)</li>
                            </ul>                   
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div styleName="section-div">
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
                        </Fade>
                    </div>
                </div>
                </Aux>
        )
    }
};


export default CSSModules(MyStory, styles, {allowMultiple: true});