import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img1 from '../../../Images/about/simple/s-About (1).jpg'
import img2 from '../../../Images/about/simple/s-About (2).jpg'
import img4 from '../../../Images/about/simple/s-About (4).jpg'
const SimpleAbout = () => {
    const history = useHistory()
    const knowMore = () => {
        history.push('/about')
    }
    return (
        <div className="py-5 ">
            <Container >
            <Row className='d-flex align-items-center'>
                <Col lg = '6'>
                <div className="heading">
                <h1>About Us</h1>
                </div>
                <p>We know taht we are the best in this country . And we always try to keep this title . We provide our best services for you. We ensure everyone safety . We did our best for every patient . You will be not our customer or client you will be our part of our family </p>
                <button onClick = {knowMore} className="btn btn-success mb-3">Know More</button>
                </Col>
                <Col lg='6'>
                    <Row  className='g-0'>
                        <Col  md='6'>
                            <img  className = 'img-fluid w-100' src={img1} alt="" />
                                                 
                                <Col md='12'>
                                    <img  className = 'img-fluid w-100' src={img4} alt="" />
                                </Col>
                        </Col>
                        <Col md='6'>
                            <img style={{height: '100%'}}  className = 'img-fluid w-100' src={img2} alt="" />
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default SimpleAbout;