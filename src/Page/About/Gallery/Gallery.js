import React from 'react';
import img1 from '../../../Images/about/about (1).jpg'
import img2 from '../../../Images/about/about (2).jpg'
import img3 from '../../../Images/about/about (3).jpg'
import img4 from '../../../Images/about/about (4).jpg'
import img5 from '../../../Images/about/about (5).jpg'
import img6 from '../../../Images/about/about (6).jpg'
import img7 from '../../../Images/about/about (7).jpg'
import img8 from '../../../Images/about/about (8).jpg'
import { Container,Row, Col } from 'react-bootstrap';
import './Gallery.css'
const Gallery = () => {
    return (
        <Container>
            <div className="heading text-center ">
                <h1>Gallery</h1>
            </div>
            <Row className='gallery g-0 py-5'>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img1} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img2} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img3} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img4} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img5} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img6} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img7} alt="" />
                </Col>
                <Col className='img-fluid' xs='6' lg='3'>
                    <img src={img8} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;