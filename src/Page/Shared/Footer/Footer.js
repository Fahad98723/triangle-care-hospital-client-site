import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className = 'text-white bg-dark py-5'>
            <Container>
                <Row className = 'align-items-center'>
                    <Col lg='4'>
                    <h3>About Us</h3>
                    <p>We know taht we are the best in this country . And we always try to keep this title . We provide our best services for you. We ensure everyone safety . We did our best for every patient</p>
                    </Col>
                    <Col lg='4 text-center'>
                        <li>Link dibo</li>
                        <li>Link dibo</li>
                        <li>Link dibo</li>
                        <li>Link dibo</li>
                    </Col>
                    <Col lg='4'>
                        <h3>Contact</h3>
                        <h5><i className="fas fa-phone"></i> : +1 543 6942 360</h5>
                        <h5><i className="fas fa-phone"></i> : +1 242 4942 290</h5>
                        <h5><i className="fas fa-map-marked-alt"></i> : Dubai, UAE</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;