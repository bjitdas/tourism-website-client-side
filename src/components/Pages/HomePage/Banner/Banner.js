import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner1 from '../../../../images/Banner/Banner-1.jpg'
import Banner2 from '../../../../images/Banner/Banner-2.jpeg'
import Banner3 from '../../../../images/Banner/Banner-3.jpg'

const Banner = () => {
    return (
        <div className="banner-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Welcome To Tourism Park</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>See Your World With Tourism Park</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Experience Your Best With Tourism Park</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;