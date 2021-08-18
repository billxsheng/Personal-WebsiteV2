import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./about.css";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { ArrowLeftSquareFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';


class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container styleName="summary-container">
                <Row styleName="back-row">
                    <Link styleName="back-arrow" to="/"><ArrowLeftSquareFill /></Link>
                </Row>
                <Row styleName="row">
                    <Col md={8} styleName="col-text">
                        <Row>
                            <div styleName="content-wrapper">
                                <p><b>Hi, I'm Bill.</b> I'm a product-driven, people-centric engineer interested in big data analytics, information retrieval, and backend architecture.</p> 
                                <p>I've worked as an engineering intern at six companies, including&nbsp;
                                <a target="_blank" styleName="text-link-fb" href="https://facebook.com">Facebook</a>,&nbsp;
                                 <a target="_blank" styleName="text-link-shopify" href="https://shopify.ca">Shopify</a>, and&nbsp;
                                  <a target="_blank" styleName="text-link-nvidia" href="https://nvidia.com/">NVIDIA</a>. I'm currently in my final year of&nbsp;<a target="_blank" styleName="text-link-mgte" href="https://uwaterloo.ca/management-sciences/management-engineering">Management Engineering</a>&nbsp;at the University of Waterloo.
                                  </p>
                                <p>In my spare time, I like to exercise, watch sports, play video games, and read.</p>
                                <p>Check out some of my projects <a target="_blank" styleName="text-link-general" href="https://github.com/billxsheng">here</a>.</p>
                            </div>
                        </Row>

                    </Col>
                    <Col md={4} styleName="col-image">
                        <Row>
                            <Image fluid styleName="image" src={require(`../../assets/images/home-pic.jpg`)} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default CSSModules(About, styles, { allowMultiple: true });