import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import ClientTestomonials from '../ClientTestimonials/ClientTestomonials';
import SimpleAbout from '../SimpleAbout/SimpleAbout';

const Home = () => {
    return (
        <div>
            <Banner>
            <Link className = 'text-white btn btn-danger mb-3 ' to='/contact'>Contact Us Now</Link>
            </Banner>
            <SimpleAbout></SimpleAbout>
            <Services></Services>
            <ClientTestomonials></ClientTestomonials>
        </div>
    );
};

export default Home;