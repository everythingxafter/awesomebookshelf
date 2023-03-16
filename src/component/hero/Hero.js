import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { Wave } from "../../assets/index";
import { HeroImage } from "../../childComponent";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Container className="landing-ibook__hero" fluid="xxl">
        <Row className="landing-ibook__hero-container container-xl d-flex justify-content-between">
          <Col className="me-5">
            <h1 className="landing-ibook__hero-heading">A book can change your life</h1>
            <Row className="landing-ibook__btn-group">
              <Stack direction="horizontal" gap={3} className="mx-auto">
                <Button className="landing-ibook__button button">Start Reading</Button>
                <Button className="landing-ibook__button button">Start Writing</Button>
              </Stack>
            </Row>
          </Col>
          <Col className="ms-5">
            <HeroImage />
          </Col>
        </Row>
        <Wave className="landing-ibook__wave-image" />
      </Container>
    </>
  );
};

export default Hero;
