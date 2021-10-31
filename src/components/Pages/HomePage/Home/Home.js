import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;