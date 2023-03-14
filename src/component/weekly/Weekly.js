import React from "react";
import "./Weekly.css";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { BestCard, SwiperCard } from "../../childComponent";

const Weekly = () => {
  return (
    <Container className="landing-ibook__Weekly" fluid="xxl">
      <Row>
        <Col className="landing-ibook__Weekly-heading">
          <h1>Top Books This Week</h1>
        </Col>

        <Row>
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
      </Row>
    </Container>
  );
};

export default Weekly;
