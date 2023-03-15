import React from "react";
import { Row, Col, Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./abook.css";

const Abook = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container fluid="xxl" className="landing-ibook__abook">
      <Row className="landing-book__row">
        <Col sm={12} md={4} className="offset-1">
          <Image src={data?.Url} className="landing-ibook__abook-images" />
        </Col>
        <Col sm={12} md={6} className="landing-ibook__container-abook">
          <h1 className="landing-ibook__heading-abook">{data?.Title}</h1>
          <span className="landing-ibook__autor-abook">{data?.Username}</span>
          <span className="landing-ibook__desc-abook">{data?.Sinopsis}</span>
          <Button
            className="landing-ibook__button-abook "
            onClick={() => navigate(`/book/${data?.id}`)}
          >
            Continue Reading
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Abook;
