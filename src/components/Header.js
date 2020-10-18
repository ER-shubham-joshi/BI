import React, { useState } from 'react';
import { Badge, Modal, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, InputGroup, DropdownButton, Dropdown, Image } from 'react-bootstrap';
import logo from '../brandLogo.png';
import Login from './Login';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">

                <Navbar.Brand href="#home">
                    <Image src={logo} width="85" />
                </Navbar.Brand>
                <Form inline>
                    <InputGroup>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-light">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Button variant="primary" onClick={handleShow}>
                            Login
                            </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><Login /></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                    </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Login
                                    </Button>
                            </Modal.Footer>
                        </Modal>
                        <NavDropdown title="Karan Tikku" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New User? Sign Up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Wishlist</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="primary">
                            <svg class="_2fcmoV" width="20" height="30" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path class="_2JpNOH" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                            Cart <Badge variant="light">9</Badge>
                            <span className="sr-only">unread messages</span>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
}

export default Header;

