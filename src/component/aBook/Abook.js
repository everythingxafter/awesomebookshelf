import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { AbookImages } from "../../assets/index";

import "./abook.css";

const Abook = () => {
  return (
    <Container fluid="xxl" className="landing-ibook__abook">
      <Row className="landing-book__row">
        <Col sm={12} md={4} className="offset-1">
          <AbookImages className="landing-ibook__abook-images" />
        </Col>
        <Col sm={12} md={6} className="landing-ibook__container-abook">
          <h1 className="landing-ibook__heading-abook">
            Lorem Ipsum Dolor Sit Amet
          </h1>
          <span className="landing-ibook__autor-abook">CookyNdi</span>
          <span className="landing-ibook__desc-abook">
            Apakah Anda penyuka buku novel atau buku yang ditulis tidak dari
            sumber kisah nyata? Buku tersebut ditulis dengan hasil imajinasi
            atau pemikiran dari seseorang. Jelas bahwa ini sesuai dengan istilah
            fiksi yang digunakan dan berdasarkan dari Kamus Besar Bahasa
            Indonesia alias KBBI. Di Indonesia sendiri ada banyak sekali jenis
            buku fiksi yang laris dijual dan dibeli oleh masyarakat secara luas.
          </span>
          <Button className="landing-ibook__button-abook ">
            Continue Reading
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Abook;
