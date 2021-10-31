import React from 'react';
import { ListGroup } from 'react-bootstrap';


const MyOrder = ({ order }) => {
    return (
        <div className="list-container">
            <div className="m-5 w-75 mx-auto">
                <ListGroup as="ul">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <h2>{order.Name}</h2>
                        </div>
                        <button className="btn btn-danger" pill>
                            cancel order
                        </button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default MyOrder;