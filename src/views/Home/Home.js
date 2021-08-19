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
                                <p>Hi. I'm a fourth-year&nbsp;<a target="_blank" styleName="text-link-mgte" href="https://uwaterloo.ca/management-sciences/management-engineering">Management Engineering</a>&nbsp;student at the University of Waterloo.</p>
                            </Row>
                            {/* <Row>
                                <p>This past winter, I interned at&nbsp;
                                    <a target="_blank" styleName="text-link-shopify" href="https://shopify.ca">Shopify</a>&nbsp;as a backend engineer on the&nbsp; 
                                    <a target="_blank" styleName="text-link-gc" href="https://apps.shopify.com/google?surface_detail=places-to-sell-online-marketplaces&surface_inter_position=1&surface_intra_position=1&surface_type=category">Google Sales Channel</a>&nbsp;team.
                                </p>
                            </Row> */}
                            <Row>
                                <p>This upcoming fall, I will be working at&nbsp;
                                    <a target="_blank" styleName="text-link-fb" href="https://facebook.com">Facebook</a>&nbsp;as a software engineering intern on the&nbsp; 
                                    <a target="_blank" styleName="text-link-whatsapp" href="https://www.whatsapp.com/?lang=en">WhatsApp Web</a>&nbsp;team.
                                </p>
                            </Row>
                            <Row>
                                <Link to="/about"><Button styleName="text-link-learn-more">Learn More</Button></Link>
                            </Row>
                            <Row styleName="future-text">
                                <p>Currently seeking <b>2022 Internship/New Grad opportunities.</b>&nbsp;View my&nbsp;<a target="_blank" href={Resume} styleName="text-link-resume">resume</a>.</p>
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