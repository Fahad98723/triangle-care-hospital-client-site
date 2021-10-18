import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <Container className='py-5'>
            <div className="heading text-center">
                <h1>Meet Our Doctors</h1>
                <p>These are the best doctors we have . They will take care their perspective job. Contact with us to meet our doctors</p>
                
            </div>
            <Row xs={1} md={3} className="g-4 py-5">
            {
                doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
            }
            </Row>
        </Container>
    );
};

export default Doctors;