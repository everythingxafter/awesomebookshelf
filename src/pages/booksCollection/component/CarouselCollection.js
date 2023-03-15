import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./CarouselCollection.css";

export default function CarouselCollection({ data }) {
  return (
    <div className="carousel-container">
      <Container>
        <Carousel>
          {data?.map((value, index) => {
            return (
              <Carousel.Item>
                <img
                  className="image-carousel"
                  src={value?.Url}
                  alt={`${index} slide`}
                />
                <Carousel.Caption>
                  <h3>{value?.Title}</h3>
                  <p>{value?.Username}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}
