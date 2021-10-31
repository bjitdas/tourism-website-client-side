import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { MdStar } from "react-icons/md";
import './Reviews.css'


const Reviews = () => {
    return (
        <div className="review-container mx-auto">
            <h2 className="text-danger m-5 fs-1 fw-bold text-decoration-underline">Respected Reviewers</h2>
            <Carousel>
                <Carousel.Item>
                    <Card className="card">
                        <Card.Img className="card-img" variant="top" src="https://i.ibb.co/wsqhn8L/utfal.jpg" />
                        <Card.Body>
                            <div className="m-2" >
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                            </div>
                            <Card.Title>UTFAL</Card.Title>
                            <Card.Text>
                                Its a great experience with Tourism Park. I am Highly recommend Tourism Park. It is the greatest Tourism site.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card>
                        <Card.Img className="card-img" variant="top" src="https://i.ibb.co/F3fgFft/sourov.jpg" />
                        <Card.Body>
                            <div className="m-2" >
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                            </div>
                            <Card.Title>SOUROV</Card.Title>
                            <Card.Text>
                                Its a great experience with Tourism Park. I am Highly recommend Tourism Park. It is the greatest Tourism site.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card>
                        <Card.Img className="card-img" variant="top" src="https://i.ibb.co/C61gjtG/hridoy.jpg" />
                        <Card.Body>
                            <div className="m-2" >
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                                <span><MdStar /></span>
                            </div>
                            <Card.Title>Hridoy</Card.Title>
                            <Card.Text>
                                Its a great experience with Tourism Park. I am Highly recommend Tourism Park. It is the greatest Tourism site.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Reviews;