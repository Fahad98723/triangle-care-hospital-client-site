import React from 'react';
import img1 from '../../../Images/about/about (1).jpg'
import img2 from '../../../Images/about/about (2).jpg'
import img3 from '../../../Images/about/about (3).jpg'
import img4 from '../../../Images/about/about (4).jpg'
import img5 from '../../../Images/about/about (5).jpg'
import img6 from '../../../Images/about/about (6).jpg'
import img7 from '../../../Images/about/about (7).jpg'
import img8 from '../../../Images/about/about (8).jpg'
import { Container,Row, Carousel } from 'react-bootstrap';
import './Gallery.css'
const Gallery = () => {
    return (
        <Container>
            <div className="heading text-center mb-3 ">
                <h1>Gallery</h1>
            </div>
            <Row>
            <Carousel className='carousel mb-5'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img5}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img6}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img7}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img8}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>               
            </Row>
        </Container>
    );
};

export default Gallery;