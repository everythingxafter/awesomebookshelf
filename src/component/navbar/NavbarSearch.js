import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavbarSearch({ username }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const getSearch = (e) => {
    e.preventDefault();
    navigate("/searchbook", {
      state: {
        search,
      },
    });
  };

  return (
    <Navbar
      sticky="top"
      style={{ backgroundColor: "var(--backgroundPrimary)" }}
    >
      <Container>
        <Form className="d-flex" style={{ width: "80%" }}>
          <Form.Control
            type="search"
            placeholder="Search Book"
            className="me-2"
            aria-label="Search Book"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            style={{ backgroundColor: "#535C66" }}
            onClick={(e) => getSearch(e)}
          >
            Search
          </Button>
        </Form>
        <Nav>
          <Nav.Link href="#deets" style={{ color: "white" }}>
            {username}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
