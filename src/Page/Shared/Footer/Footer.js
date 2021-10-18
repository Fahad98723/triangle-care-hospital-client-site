import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className = 'text-white bg-dark py-5'>
            <Container>
                <Row className = 'align-items-center text-center'>
                    <Col lg='4'>
                    <h3>About Us</h3>
                    <p>We know taht we are the best in this country . And we always try to keep this title . We provide our best services for you. We ensure everyone safety . We did our best for every patient</p>
                    </Col>
                    <Col lg='4' className='menu'>
                            <li className='mb-2'><Link to='home'>Home</Link></li>
                            <li className='mb-2'><Link to='about'>About</Link></li>
                            <li className='mb-2'><Link to='contact'>Contact</Link></li>
                            <li className='mb-2'><Link to='login'>Login</Link></li>
                    </Col>
                    <Col lg='4'>
                        <h3>Contact</h3>
                        <h6><i className="fas fa-phone"></i> : +9355 3652 832</h6>
                        <h6><i className="fas fa-phone"></i> : +5642 4352 257</h6>
                        <h6><i className="fas fa-map-marked-alt"></i> : Dubai, UAE</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;