import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from "react-router-dom";

export default function NavbarHome() {
    return (
        <Navbar variant="dark" expand="lg" style={{
            backgroundColor: 'var(--backgroundPrimary) !important',
            color: 'var(--fontColorPrimary)',
            zIndex: '9999'
        }}>
            <Container>
                <Navbar.Brand as={Link} to={`/`}>iRead</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%", gap: "1em" }}>
                        <Nav.Link as={Link} to={`/bookscollection`}>Books Collection</Nav.Link>
                        <Nav.Link as={Link} to={`/categories`}>Categories</Nav.Link>
                        <Nav.Link as={Link} to={`/aboutus`}>About Us</Nav.Link>
                        <Nav.Link as={Link} to={`/login`}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}