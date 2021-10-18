import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapAndDetails = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <Container className='py-5'>
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                    />
                </GoogleMapReact>
                </div>
            <div className="contact-details mt-5">
                <Row>
                    <Col>
                        <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3">
                            <i className="fas fa-home fs-3 text-success"></i>
                            </div>
                            <div className="details">
                            <h5>Binghamton, New York</h5>
                            <p>4343 Hinkle Deegan Lake Road</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3">
                            <i class="fas fa-phone-alt fs-3 text-success"></i>
                            </div>
                            <div className="details">
                            <h5>00 (958) 9865 562</h5>
                            <p>24 Hours</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <div className="icon me-3 ">
                            <i class="far fa-envelope fs-3 text-success"></i>
                            </div>
                            <div className="details">
                            <h5>md.ravi63@gmail.com</h5>
                            <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <input placeholder='Your Name' className='w-100 p-1 mb-3 rounded border-1' type="text" name="" id="" />                    
                    <input placeholder='Your Email' className='w-100 p-1 mb-3 rounded border-1' type="email" name="" id="" />
                    <input placeholder="Your Subject" className='w-100 p-1 mb-3 rounded border-1' type="text" name="" id="" />
                    <button className="btn btn-success">Send</button>
                    </Col>
                    <Col>
                    <textarea placeholder='Your Message' className='w-100 p-1 rounded border-1' name="" id="" cols="30" rows="8"></textarea>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default MapAndDetails;