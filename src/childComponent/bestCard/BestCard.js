import React from "react";
import { Card, Button } from "react-bootstrap";
import "./bestcard.css";

const BestCard = ({ images }) => {
  return (
    <Card className="landing-ibook__best-card">
      <Card.Img
        variant="top"
        src={images}
        className="landing-ibook__best-image"
      />
      <Card.Body className="landing-ibook__best-body">
        <Button variant="primary" className="landing-ibook__best-button">
          Read Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BestCard;
