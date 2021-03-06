import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useService from '../../../Hook/useService';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const  {services} = useService()

    //service details by their id with  after click on home page services details button
    const serviceDetails = services.find(service  => service._id === serviceId)

    return( 
        <div className="py-5">
            <Card className = 'mx-auto border-2' style={{width : '22rem'}}>
            <Card.Img variant="top" src={serviceDetails?.image} />
            <Card.Body>
            <Card.Title className=  'fw-bold'>{serviceDetails?.serviceName}</Card.Title>
            <Card.Text>
               {serviceDetails?.details}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Service Time : {serviceDetails?.duration}</small>
            </Card.Footer>
            </Card>
        </div>
    );
};

export default ServiceDetails;