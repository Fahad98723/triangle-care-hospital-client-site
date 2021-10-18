import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {serviceName, image, details,_id } = service
    const history = useHistory()
    const handleDetails = () => {
        history.push(`/details/${_id}`)
    }
    return (
        <Col>
            <Card className='rounded card' >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='fw-bold'>{serviceName}</Card.Title>
                <Card.Text>
                {details}
                </Card.Text>
                <button onClick={handleDetails} className='btn btn-danger'>Details</button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;