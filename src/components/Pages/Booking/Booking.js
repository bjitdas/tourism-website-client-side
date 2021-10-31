import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handlePlaceOrder = () => {
        service.user = user
        // service.user = user.email
        // service.user = user.displayName
        // service.user = user.uid


        axios.post('http://localhost:5000/orders', service)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully placed order')
                    history.push('/orderplaced')
                }
            })
    }

    return (
        <div className="m-5 d-flex justify-content-center align-items-center">
            <div className="card mb-3 w-75 m-5">
                <div style={{ height: '280px' }} className="row g-0">
                    <div className="col-md-6">
                        <img style={{ width: '100%' }} src={service.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{service.Name}</h5>
                            <p className="card-text">{service.Description}</p>
                            <p className="card-text"> <button onClick={handlePlaceOrder} className="btn btn-warning">Place Order</button> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;