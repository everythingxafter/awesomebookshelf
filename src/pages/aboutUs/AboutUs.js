import React from "react";
import Navbar from "../../component/navbar/Navbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/logo.png";
import member1 from "./assets/member1.jpg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <Container className="container">
        <Row>
          <Col sm={8}>
            <h1 className="description">
              <span> About </span> iRead
            </h1>
            <div className="description-1">
              <p>
                iRead adalah sebuah platform digital untuk membaca buku yang
                menyediakan akses mudah ke berbagai jenis buku dan membantu
                penggunanya mengelola koleksi buku digital mereka. Dengan
                fitur-fitur seperti bookmarking, penanda halaman, dan pengaturan
                pencahayaan layar yang dapat disesuaikan, pengguna dapat
                menikmati pengalaman membaca yang nyaman dan personal.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="container-logo">
              <Image className="about-logo" src={logo} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="h1">
          <span>Meet </span>Our Team
        </h1>
      </Container>
      <Container>
        <Row className="member-row">
          <Col sm={4}>
            <div className="about-member1">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
            </div>
          </Col>
          <Col sm={8}>
            <div className="description-p">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="about-row">
          <Col sm={4}>
            <div className="about-member2">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="about-member3">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="about-member4">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <div className="about-member5">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="about-member6">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="about-member7">
              <Image src={member1} />
              <h2> Name </h2>
              <h4> The Head Of Nekomimi Rookie</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
