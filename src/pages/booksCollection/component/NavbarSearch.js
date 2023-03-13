import React from "react"
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"

export default function NavbarSearch() {
    return (
        <Navbar style={{ backgroundColor: "var(--backgroundPrimary)" }}>
            <Container>
                <Form className="d-flex" style={{ width: "80%" }}>
                    <Form.Control
                        type="search"
                        placeholder="Search Book"
                        className="me-2"
                        aria-label="Search Book"
                    />
                    <Button style={{ backgroundColor: "#535C66" }}>Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#deets" style={{ color: "white" }}>Username</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}