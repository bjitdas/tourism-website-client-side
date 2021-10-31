import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://pacific-springs-80495.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="m-3">
            <h1 className="text-light mt-5 mb-4 fw-bold text-decoration-underline">Our Special Package Tour Offers</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;