import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css' 
import img from '../../../Images/—Pngtree—doctors and medical teams wearing_5342449.png'
const Banner = ({children}) => {
    return (
        <div className="banner-section d-flex text-white align-items-center">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col lg='6'>
                        <div className="heading">
                        <h1>We are always here for your care </h1>
                        </div>
                        <p>We provide our best in here. Trust us and we will do our best for you. We ensure our best service and  help for you .We believe we are the best and that't believe us.</p>
                        {children}
                    </Col>
                    <Col  lg='6'>
                        <img className='img-fluid' src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;