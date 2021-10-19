import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/client (2).jpg'
import img2 from '../../../Images/freestocks-9UVmlIb0wJU-unsplash (1).jpg'
import './ClientTestomonial.css'
const ClientTestomonials = () => {
    return (
        <Container className =  'py-5'>
            <div className="heading mb-5 text-center">
                <p>Client Testimonials</p>
                <h1>What Our Clients Say</h1>
            </div>
            <div className="clients">
                <Row className =  'mx-auto'>
                    <Col lg='6' className='my-3 client ps-3'>
                        <Row className='align-items-center d-flex'>
                            <Col lg='3'>
                                <img style = {{height : '120px',width : '120px'}} className='img-fluid rounded-circle' src={img1} alt="" /> 
                            </Col>
                            <Col lg='9' >
                                <h3>Montasir Chowdhury</h3>
                                <p>Student</p>
                            </Col>
                        </Row> 
                        <Row>
                            <Col lg = '6' className='mt-3 text-success fw-bold'>
                                <p> The Big Oxmax advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli </p>
                            </Col>    
                        </Row>  
                    </Col>
                    <Col lg='6' className='my-3 client ps-3'>
                        <Row className='align-items-center d-flex'>
                            <Col lg='3'>
                                <img style = {{height : '120px',width : '120px'}} className='img-fluid rounded-circle' src={img2} alt="" /> 
                            </Col>
                            <Col lg='9' >
                                <h3>Humaira Himu</h3>
                                <p>Housewife</p>
                            </Col>
                        </Row> 
                        <Row>
                            <Col lg = '6' className='mt-3 text-success fw-bold'>
                                <p> The Big Oxmax advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli </p>
                            </Col>    
                        </Row>  
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ClientTestomonials;