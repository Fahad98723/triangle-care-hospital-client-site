import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Gallery from '../Gallery/Gallery';

const About = () => {
    return (
        <div>
            <Banner>
            <Link className = 'text-white btn btn-danger ' to='contact'>Contact Us Now</Link>
            </Banner>
            <Doctors></Doctors>
            <Gallery></Gallery>
        </div>
    );
};

export default About;