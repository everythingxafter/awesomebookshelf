import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container
      fluid="xxl"
      className="landing-ibook_footer text-center d-flex align-items-center justify-content-around"
    >
      <span className="landing-ibook__footer-logo">iRead</span>
      <span className="landing-ibook__footer-copyright">
        Created With <span className="landing-ibook__love">❤</span> | Copyright iRead
      </span>
      <span className="landing-ibook__footer-aboutus">About Us</span>
    </Container>

    // <Container fluid="xxl" className="landing-ibook_footer text-center">
    //   <Row>
    //     <Col>
    //       <span className="landing-ibook__footer-logo">iRead</span>
    //     </Col>
    //     <Col>
    //       <p className="landing-ibook__footer-copyright">
    //         Created With <span class="landing-ibook__love">❤</span> | Copyright
    //         iRead
    //       </p>
    //     </Col>
    //     <Col>
    //       <span className="landing-ibook__footer-aboutus">About Us</span>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Footer;
