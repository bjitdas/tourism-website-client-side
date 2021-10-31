import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <div className="text-light bg-dark p-1">
            <div className="header-text  lh-1">
                <h1 className="fst-italic">Tourism Park</h1>
                <p>see your world</p>
            </div>
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                {user.email &&
                                    <>
                                <Nav.Link as={Link} to="/addservices">Add Services</Nav.Link>
                                <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageorders">Manage Orders</Nav.Link>
                                    </>
                                }

                            </Nav>
                            <Nav>
                                {user.email ? <button className="me-1 btn btn-warning rounded" onClick={logOut}>Log Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                                <Navbar.Text>
                                    Signed in as:{user?.displayName}
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;