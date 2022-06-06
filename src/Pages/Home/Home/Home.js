import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;