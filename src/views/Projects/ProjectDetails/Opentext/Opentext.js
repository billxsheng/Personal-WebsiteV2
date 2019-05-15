import React, { Component } from 'react';
import styles from '../ProjectDetails.css';
import CSSModules from 'react-css-modules';
import ProjectsInfo from '../../../../assets/projectsInfo';
import Image from '../../../../components/Image/Image';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

var projectsArray = ProjectsInfo.headings.projectOrder;

class Opentext extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((ProjectsInfo.opentext.name).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((ProjectsInfo.opentext.name).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    
    render() {
        return (
            <div>
                <span styleName="curve" className="container">
                    <div className="row container" style={{margin: '0 auto'}}>
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.opentext.name.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <Fade bottom>
                        <div className="col-md-8">
                            <h1>
                                {ProjectsInfo.opentext.name}
                            </h1>
                        </div>
                        </Fade>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/experience/${projectsArray[projectsArray.indexOf(ProjectsInfo.opentext.name.toLowerCase()) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div> 
                    </div>
                    <Fade bottom>
                    <p>
                        {ProjectsInfo.opentext.description}
                    </p>
                    <div className="row" styleName="tag" >
                        <p className="text-center" styleName="title-p" >{ProjectsInfo.opentext.tag}</p>
                    </div>
                    </Fade>
                </span>
                <div styleName="modal" >
                    <Fade bottom>
                    <hr/>
                    <Image width="500px" path = "projects/ot/ot.png" />
                    <hr/>
                    </Fade>
                    <Fade bottom>
                    <h4>Position</h4>
                    <p>{ProjectsInfo.opentext.content.position}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>Technology</h4>
                    <p>{ProjectsInfo.opentext.content.technology}</p>
                    </Fade>
                    <Fade bottom>
                    <h4>My Tasks</h4>
                    <ul className="list-group">
                    <li><p3>Developed a SaaS Cloud Platform that provides cloud computing resources, microservices, storage, deployment, and cybersecurity capabilities to clients and OpenText teams; engaged in all phases of the SDLC during production process</p3></li>
                    <li><p3>Wrote monitoring services, error detection software in Java to provide insight on numerous agents running on external networks; allowed development team to analyze and forecast iOS/Android build jobs</p3></li>
                    <li><p3>Revised, upgraded 6000+ lines of TypeScript code in Angular dashboard to be used by 1500+ stakeholders</p3></li>
                    <li><p3>Implemented a centralized store design pattern on top of Angular application using NGRX for more reusable code structure; reduced source code by 40%</p3></li>
                    <li><p3>Practiced test-driven development and wrote automated unit/integration tests using Mockito and Jasmine for Jenkins CI/CD</p3></li>
                    </ul>
                    </Fade>
                    <Fade bottom>
                    <h4>Evaluation</h4>
                    <p>{ProjectsInfo.opentext.content.evaluation}</p>
                    </Fade>
                    <Fade bottom>

                    <Image width="500px" withRadius fine="Office in Richmond Hill, Ontario" path ="projects/ot/ot-3.png" />
                    </Fade>
                    <Fade bottom>
                    <div className="row">
                        <div className="col-md-6">
                        <Image withRadius fine="Reception Desk" path ="projects/ot/ot-1.png" />
                        </div>
                        <div className="col-md-6">
                        <Image withRadius fine="Corridor Art" path ="projects/ot/ot-2.png" />
                        </div>
                    </div>   
                    </Fade>
                </div>
            </div>
        )
    }
};



export default CSSModules(Opentext, styles);