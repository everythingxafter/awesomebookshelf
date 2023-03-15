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
          You will find various types of books on this website. Happy Reading!
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
          title="Aksesibilitas yang lebih mudah"
          content="Dengan membaca buku digital lewat web, Anda dapat mengakses buku kapan saja dan di mana saja selama Anda memiliki koneksi internet dan perangkat yang sesuai. Anda tidak perlu pergi ke toko buku fisik atau menunggu pengiriman buku ke rumah Anda."
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
          title="Biaya yang lebih murah"
          content="Buku digital seringkali lebih murah daripada buku cetak, dan beberapa buku digital bahkan dapat diakses secara gratis di web."
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Portabilitas yang lebih baik"
          content="Anda dapat membawa banyak buku digital dalam satu perangkat, seperti laptop atau tablet, sehingga memudahkan Anda membawa banyak buku di mana saja tanpa perlu membawa buku cetak yang berat."
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Fasilitas pencarian"
          content="Buku digital biasanya memiliki fitur pencarian yang memungkinkan Anda menemukan informasi tertentu dengan cepat dan mudah. Hal ini sangat membantu jika Anda perlu mencari informasi spesifik dalam buku yang panjang."
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Interaktivitas yang lebih baik"
          content="Beberapa buku digital di web dilengkapi dengan fitur interaktif seperti video, audio, atau gambar yang memperkaya pengalaman membaca Anda."
        />

        <BenefitCard
          icon={() => <i class="fa fa-university" aria-hidden="true"></i>}
          title="Ramah lingkungan"
          content="Membaca buku digital lewat web dapat membantu mengurangi jumlah kertas yang digunakan untuk mencetak buku cetak. Ini dapat membantu mengurangi dampak lingkungan dari industri percetakan dan penerbitan."
        />
      </Row>
    </Container>
  );
};

export default Benefit;
