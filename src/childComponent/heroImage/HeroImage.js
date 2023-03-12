import React from "react";
import { Row } from "react-bootstrap";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <Row className="landing-ibook__hero-image-container img-fluid">
      <div className="little-card the-card"></div>
      <div className="big-card the-card"></div>
      <div className="little-card the-card"></div>
      <div className="big-card the-card"></div>
      <div className="little-card the-card"></div>
      <div className="big-card the-card"></div>
      <div className="little-card the-card"></div>
      <div className="big-card the-card"></div>
    </Row>
  );
};

export default HeroImage;
