import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">CSE 412 Final Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">World View</Nav.Link>
                    <Nav.Link href="/countries/US">United States</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation
