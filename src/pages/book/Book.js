import React, { useEffect, useState } from "react";
import "./style/Book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import BgReading from "./asset/The Regressed Demon Lord is Kind.jpeg";
// import Poster from "./asset/Poster.png";
import { FaBookmark } from "react-icons/fa";
import NavbarHome from "../../component/navbar/NavbarHome";
import { SwiperSlide } from "swiper/react";
import { BestCard, SwiperCard } from "../../childComponent";
import { Footer } from "../../component";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Book() {
  useEffect(() => {
    document.title = `iRead | ${ContentById.Title}`;
  }, []);

  const { id } = useParams();
  const [ContentById, setContentById] = useState([]);
  const [Genre, setGenre] = useState([]);

  useEffect(() => {
    const getContentById = async () => {
      const response = await axios.get(`http://localhost:5000/content/data/${id}`);
      setContentById(response.data);
      if (response.data !== undefined) {
        setGenre(response.data.Genres.split(", "));
      } else {
        console.log("nice try");
      }
    };
    getContentById();
  }, [id]);

  // for (let i = 0; i < ContentById.Stories.length; i++) {
  //   console.log(ContentById.Stories[i]);
  // }

  console.log(Genre);
  return (
    <div>
      <NavbarHome />
      <section className="wrap-book">
        <img src={ContentById.Url} alt="" className="bannerBook" />
        <Container className="mt-5 ContainerBook">
          <Row className="mb-5">
            <Col md={4} className="d-flex flex-column align-items-center">
              <div style={{ maxWidth: "303px", maxHeight: "427px" }} className="mb-4">
                <img src={ContentById.Url} alt={ContentById.Poster} className="posterBook" />
              </div>
              <Button
                className="d-flex justify-content-between align-items-center px-4 mb-4"
                style={{
                  width: "293px",
                  height: "50px",
                  backgroundColor: "#108ADC",
                  // backgroundColor: "#00CD52",
                  fontSize: "22px",
                  border: "none",
                }}
              >
                <span>
                  <FaBookmark />
                </span>
                Save to reading list
              </Button>
              {/* <Button
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
              </Button> */}
            </Col>
            <Col md={8}>
              <div className=" d-flex align-items-end" style={{ height: "150px" }}>
                <h1 className="fw-bold" style={{ fontSize: "34px", lineHeight: "50px" }}>
                  {ContentById.Title}
                </h1>
              </div>
              <div className="d-flex flex-row align-items-start mt-2 mb-5">
                <div className="d-flex flex-column justify-content-center align-items-center infoBook">
                  <p className="mb-0">
                    <strong>Publish On</strong>
                  </p>
                  <p>{ContentById.ReleaseDate}</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center infoBook">
                  <p className="mb-0">
                    <strong>Author</strong>
                  </p>
                  <p>{ContentById.Username}</p>
                </div>
                <div className="d-flex flex-md-row flex-wrap">
                  {Genre.map((data) => (
                    <Button variant="success" size="sm" className="me-1 mb-1">
                      {data}
                    </Button>
                  ))}
                </div>
              </div>
              <div style={{ maxWidth: "833px" }}>
                <pre style={{ fontSize: "18px" }} className="mb-4 pt-2">
                  {ContentById.Stories}
                </pre>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="landing-ibook__Weekly-heading">
              <h1 className="fs-3">Top Books This Week</h1>
            </Col>
            <Col>
              <SwiperCard>
                <SwiperSlide className="landing-ibook__swiper-slide">
                  <BestCard images="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <BestCard images="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.jpg?ts=1637017516" />
                </SwiperSlide>
                <SwiperSlide className="landing-ibook__swiper-slide">
                  <BestCard images="https://marketplace.canva.com/EAFMf17QgBs/1/0/1003w/canva-green-and-yellow-modern-book-cover-business-Ah-do4Y91lk.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <BestCard images="https://www.adobe.com/express/create/cover/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02.jpeg?width=400&format=jpeg&optimize=medium" />
                </SwiperSlide>
                <SwiperSlide className="landing-ibook__swiper-slide">
                  <BestCard images="https://images-platform.99static.com//6ELqOlDZNAkWKAlKTT3XjDPSZ_c=/fit-in/590x590/projects-files/83/8342/834261/bc96e38c-765d-4031-a33f-b03eb49bca14.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <BestCard images="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/154230/optimized_large_thumb_stage.jpg" />
                </SwiperSlide>
                <SwiperSlide className="landing-ibook__swiper-slide">
                  <BestCard images="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/10/the-50-coolest-book-covers-47.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <BestCard images="https://images.penguinrandomhouse.com/cover/9780593230985" />
                </SwiperSlide>
              </SwiperCard>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
