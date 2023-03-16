import React from "react";
import "./NavbarHome.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from "react-router-dom";

export default function NavbarHome() {
    const access_token = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");
    return (
        <Navbar variant="dark" expand="lg" className="navigation" style={{
            zIndex: '9999',
            position: "sticky",
            top: "0",
        }}>
            <Container>
                <Navbar.Brand as={Link} to={`/`}>iRead</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%", gap: "1em" }}>
                        <Nav.Link as={Link} to={`/bookscollection`}>Books Collection</Nav.Link>
                        <Nav.Link as={Link} to={`/categories`}>Categories</Nav.Link>
                        <Nav.Link as={Link} to={`/aboutus`}>About Us</Nav.Link>
                        {access_token ? (
                            <Nav.Link as={Link} to={`/dashboard`} style={{ color: 'white' }}>Welcome, {username}</Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to={`/dashboard`}>Login</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}