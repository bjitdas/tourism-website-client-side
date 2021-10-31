import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from './ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://pacific-springs-80495.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="mt-5">
                <span className="bg-light p-3  fs-2">Manage All Orders</span>
            </div>

            {
                services.map(service => <ManageOrder
                    key={service._id}
                    service={service}
                ></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;