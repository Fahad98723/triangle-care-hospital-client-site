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
                                <p>Businessman</p>
                            </Col>
                        </Row> 
                        <Row>
                            <Col lg = '12' className='mt-3 text-success fw-bold'>
                                <p>On behalf of my wife, who was a patient in your hospital, I humbly submit my sincere gratitude to the management and staff of Jamaica Hospital, especially to your outstanding nurses and PCAs. They have been outstandingly helpful and provided a high quality of service, care and comfort to my wife. Thank you.</p>
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
                            <Col lg = '12' className='mt-3 text-success fw-bold'>
                                <p>I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.</p>
                            </Col>    
                        </Row>  
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ClientTestomonials;