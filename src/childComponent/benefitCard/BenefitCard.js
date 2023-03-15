import React from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "./benefitCard.css";

const BenefitCard = ({ icon, title, content }) => {
  return (
    <Col md={4} sm={6} className="col-12">
      <Card className="landing-ibook__benefit-card">
        <Card.Body>
        <Row className="landing-ibook__icon-container">{icon}</Row>
          <Card.Title className="landing-ibook__card-heading">
            {title}
          </Card.Title>
          <Card.Text className="landing-ibook__card-text">{content}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BenefitCard;
