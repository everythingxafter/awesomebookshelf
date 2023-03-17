import { Link, useRouteError } from "react-router-dom";
import { Container, Row, Col, Stack, Button} from "react-bootstrap";
import "./ErrorPage.css";
import error from "./404.jpg"; 

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container className="landing-ibook__error" fluid="xxl">
      <Row>
        <Col className="landing-ibook_error_image-col" xs={12} md={6}>
        <img src={error} alt="Error image" className="landing-ibook_error_image" />
        </Col>
        <Col className="landing-ibook_error_content-col" xs={12} md={6}>
          <Stack gap={3} className="landing-ibook_error_content-stack">
            <h1 className="landing-ibook_error_heading">Oh No! Error 404</h1>
            <p className="landing-ibook_error_text">The page didn’t exist, Come back to the Books Collection page</p>
            <Link to={`/`} className="landing-ibook_error_link">
              <Button className="landing-ibook_error_button">Books Collection</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}