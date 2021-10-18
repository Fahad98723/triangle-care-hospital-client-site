import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name, details, typeOf,fee,image} = doctor
    return (
    <Col>
        <Card>
          <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title className='fw-bold fs-3'>{name}</Card.Title>
            <Card.Title>{typeOf}</Card.Title>
            <Card.Text>
              {details}
            </Card.Text>
            <h3>Fee : $ {fee}</h3>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;