import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BenefitCard } from "../../childComponent";

import "./Benefit.css";

const Benefit = () => {
  return (
    <Container className="landing-ibook__benefit" fluid="xxl">
      <Row>
        <Col className="text-center">
          <h1 className="landing-ibook__benefit-heading">
            <span>
              Welcome to the most complete book site, find various reading books
              from the fantasy, horror, comedy genres and others.
            </span>
          </h1>
          <span className="landing-ibook__benefit-subheading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-0-circle"
              viewBox="0 0 16 16"
            >
              <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
            </svg>
          </span>
        </Col>
      </Row>
      <Row className="landing-ibook__benefit-container">
        <BenefitCard
          icon={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-0-circle"
              viewBox="0 0 16 16"
            >
              <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
            </svg>
          )}
          title="keunggulan website yang pertama"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <BenefitCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-archive-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
            </svg>
          }
          title="Keunggulan website yang kedua"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Lorem Impsum Dolor Sit Amet"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Lorem Impsum Dolor Sit Amet"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Lorem Impsum Dolor Sit Amet"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Lorem Impsum Dolor Sit Amet"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Row>
    </Container>
  );
};

export default Benefit;
