import React from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = ({ service }) => {
    console.log(service)
    return (
        <div>
            <div className="m-5 bg-light">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tour-Package</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{service.user.displayName}</td>
                            <td>{service.Name}</td>
                            <td>{service.user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder;