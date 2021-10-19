import React from 'react';
import Banner from '../../Home/Banner/Banner';
import MapAndDetails from '../MapAndDetails/MapAndDetails';
import Ambulance from '../Ambulance/Ambulance'
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <Banner>
            <Link className = 'text-white btn btn-danger mb-3 ' to='/login'>Login</Link>
            </Banner>
            <MapAndDetails></MapAndDetails>
            <Ambulance></Ambulance>
        </div>
    );
};

export default Contact;