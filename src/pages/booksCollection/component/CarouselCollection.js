import React from "react"
import { Carousel, Container } from "react-bootstrap"
import "./CarouselCollection.css"

export default function CarouselCollection() {
    return (
        <div className="carousel-container">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="image-carousel"
                            src="http://placekitten.com/200/300"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image-carousel"
                            src="http://placekitten.com/200/300"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="image-carousel"
                            src="http://placekitten.com/200/300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}