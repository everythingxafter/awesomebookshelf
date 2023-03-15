import React from "react";
import "./Book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import BgReading from "./bg-reading.png";
import Poster from "./Poster.png";
import BookTitle from "./book-title.png";
import { FaBookmark, FaHeart } from "react-icons/fa";
import NavbarHome from "../../component/navbar/NavbarHome"

export default function Book() {
  return (
    <div>
      ßß      {/* <div className="overflow-hidden">
        <img src={BgReading} alt="" className="img-fluid" />
      </div> */}
      <NavbarHome />
      <section className="wrap-book">
        <Container className="mt-5">
          <Row className="mb-5">
            <Col md={4} className="d-flex flex-column align-items-center">
              <div
                style={{ maxWidth: "303px", maxHeight: "427px" }}
                className="mb-4"
              >
                <img src={Poster} alt="" />
              </div>
              <Button
                variant="success"
                className="d-flex justify-content-between align-items-center px-4 mb-4"
                style={{
                  width: "293px",
                  height: "50px",
                  backgroundColor: "#00CD52",
                  fontSize: "22px",
                }}
              >
                <span>
                  <FaBookmark />
                </span>
                Save to reading list
              </Button>
              <Button
                variant="success"
                className="d-flex justify-content-start align-items-center px-4"
                style={{
                  width: "293px",
                  height: "50px",
                  backgroundColor: "#108ADC",
                  fontSize: "22px",
                }}
              >
                <span className="me-3">
                  <FaHeart />
                </span>
                Like
              </Button>
            </Col>
            <Col md={8}>
              <h1
                className="fw-bold"
                style={{ fontSize: "38px", lineHeight: "50px" }}
              >
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </h1>
              <div
                className="d-flex flex-row align-items-start mt-4 mb-5"
                style={{ gap: "110px" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <p>
                    <strong>Publish On</strong>
                  </p>
                  <p>1 Jan 2023</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <p>
                    <strong>Author</strong>
                  </p>
                  <p>CookyNdi</p>
                </div>
                <div className="d-flex flex-md-row gap-4 flex-wrap">
                  <Button variant="danger">Action</Button>
                  <Button variant="success">Animation</Button>
                  <Button variant="info">Sci-Fi</Button>
                </div>
              </div>
              <div style={{ maxWidth: "833px" }}>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p style={{ fontSize: "22px" }} className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <h1>Read Another Books</h1>
            <div className="d-flex flex-row mx-3 flex-wrap justify-content-center align-items-center mt-4">
              <Col md={3}>
                <div>
                  <img src={BookTitle} alt="" />
                </div>
                <h3 className="mt-3">Judul Buku</h3>
              </Col>
              <Col md={3}>
                <div>
                  <img src={BookTitle} alt="" />
                </div>
                <h3 className="mt-3">Judul Buku</h3>
              </Col>
              <Col md={3}>
                <div>
                  <img src={BookTitle} alt="" />
                </div>
                <h3 className="mt-3">Judul Buku</h3>
              </Col>
              <Col md={3}>
                <div>
                  <img src={BookTitle} alt="" />
                </div>
                <h3 className="mt-3">Judul Buku</h3>
              </Col>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}
