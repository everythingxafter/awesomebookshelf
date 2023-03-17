import { Link, useRouteError } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ErrorPage.css";
import errorImage from "./404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="landing-ibook__error">
      <Container>
        <Row>
          <Col className="landing-ibook_error_image-col" xs={12} md={6}>
            <img src={errorImage} alt="errorImage" className="landing-ibook_error_image" />
          </Col>
          <Col className="landing-ibook_error_content-col" xs={12} md={6}>
            <div gap={3} className="landing-ibook_error_content-stack">
              <h1 className="landing-ibook_error_heading">Oh No! Error 404</h1>
              <p className="landing-ibook_error_text">The page didn’t exist, Come back to homepage</p>
              <Link to={`/`} className="landing-ibook_error_link">
                <Button className="landing-ibook_error_button">Books Collection</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}