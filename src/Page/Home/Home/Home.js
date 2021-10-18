import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import SimpleAbout from '../SimpleAbout/SimpleAbout';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SimpleAbout></SimpleAbout>
            <Services></Services>
        </div>
    );
};

export default Home;