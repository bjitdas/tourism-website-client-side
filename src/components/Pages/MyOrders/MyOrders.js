import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://pacific-springs-80495.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrders(data)
                }
                else {
                    return <Spinner animation="grow" variant="primary" />
                }
            })
    }, [])


    return (
        <div className="bg-success p-5">
            <h1 className="text-light">My Orders</h1>
            {
                orders.filter(order => order.user.uid === user.uid).map(myorder => <MyOrder
                    key={myorder._id}
                    order={myorder}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;