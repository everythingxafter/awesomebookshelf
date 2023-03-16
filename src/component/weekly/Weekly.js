import React from "react";
import "./Weekly.css";
import { Col, Container, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { BestCard, SwiperCard } from "../../childComponent";
import { useNavigate } from "react-router-dom";

const Weekly = ({ data }) => {
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <Container className="landing-ibook__Weekly" fluid="xxl">
      <Row>
        <Col className="landing-ibook__Weekly-heading">
          <h1>Top Books This Week</h1>
        </Col>

        <Row>
          <Col>
            <SwiperCard>
              {data?.map((data) => (
                <SwiperSlide className="landing-ibook__swiper-slide" key={data.id}>
                  <BestCard images={data?.Url} onClick={() => onClick(data?.id)} />
                </SwiperSlide>
              ))}
            </SwiperCard>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Weekly;
