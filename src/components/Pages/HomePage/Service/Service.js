import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, Name, Description, img } = service;


    return (
        <div className="card-container">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            {Description}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary rounded">Purchase Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;