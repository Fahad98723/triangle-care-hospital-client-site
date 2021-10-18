import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hook/useService';
import Service from './Service/Service';

const Services = () => {
    const {services} = useService()
    console.log(services);
    return (
        <Container className = 'py-5'>
           <div className="service-heading text-center mb-5 ">
                <div className="heading">
                <h1>Our Special Services For You</h1>
                </div>
                <p>We provide our best service for you . We are ready to help you anytime and any moments . Be healthy and happy.</p>
           </div>
           <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service 
                    key= {service._id}
                    service = {service}
                ></Service>)
            }
           </Row>
           
        </Container>
    );
};

export default Services;