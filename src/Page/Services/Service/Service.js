import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {serviceName, image, details } = service
    return (
        <Col>
            <Card className='rounded card' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{serviceName}</Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
                <button className='btn btn-danger'>Details</button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;