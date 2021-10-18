import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../Images/kisspng-ambulance-cartoon-cartoon-ambulance-5a7d05548ac439.0899440815181428045684.png'
const Contact = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col lg='6'>
                    <div className="heading">
                        <h1 className= 'fw-bold mb-5 text-danger'>Need Ambulance ?</h1>
                    </div>
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <button className="btn btn-success">Send</button>
                    </Form>
                </Col>
                <Col lg='6'>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;