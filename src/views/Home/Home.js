import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./home.css";
import { EnvelopeFill, FileEarmarkFill, Github, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/resume.pdf';



class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container styleName="container">
                <Row styleName="row">
                    <Col>
                        <div styleName="content-wrapper">
                            <Row styleName="name">
                                <h1>Bill Sheng</h1>
                            </Row>
                            <Row>
                                <p>I'm currently a software engineer at&nbsp;<a target="_blank" styleName="text-link-fb" href="https://www.meta.com/">Meta</a> based in New York City.</p>
                            </Row>
                            <Row>
                                <p>I graduated from the University of Waterloo in 2022 with a degree in&nbsp;<a target="_blank" styleName="text-link-mgte" href="https://uwaterloo.ca/management-sciences/management-engineering">Management Engineering</a>.</p>
                            </Row>
                            <Row>
                                <Link to="/about"><Button styleName="text-link-learn-more">Learn More</Button></Link>
                            </Row>
                            <Row styleName="future-text">
                                <p>View my&nbsp;<a target="_blank" href={Resume} styleName="text-link-resume">resume</a>.</p>
                            </Row>
                            <Row styleName="links-row">
                                <a target="_blank" href={Resume}><FileEarmarkFill /></a>
                                <a href="mailto:bxsheng@uwaterloo.ca"><EnvelopeFill /></a>
                                <a target="_blank" href="https://linkedin.com/in/billxsheng"><Linkedin /></a>
                                <a target="_blank" href="https://github.com/billxsheng"><Github /></a>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default CSSModules(Home, styles, { allowMultiple: true });