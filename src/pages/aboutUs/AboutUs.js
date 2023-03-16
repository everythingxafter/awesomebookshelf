import React from "react";
import NavbarHome from "../../component/navbar/NavbarHome";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./assets/logo.png";
import "./AboutUs.css";
import memberIqbal from './assets/member-iqbal.jpeg'
import memberShobrina from './assets/member-shobrina.jpg'
import memberYandi from './assets/member-yandi.jpg'
import memberAhmad from './assets/member-ahmad.jpeg'
import memberNahrul from './assets/member-nahrul.jpg'
import memberIrvan from './assets/member-irvan.jpeg'

export default function AboutUs() {
  return (
    <div>
      <NavbarHome />
      <Container style={{ marginTop: '3em' }}>
        <Row>
          <Col sm={8}>
            <Container>
              <h1 className="about-us__title">
                <span>About </span>iRead
              </h1>
              <div className="description-1">
                <p>
                  iRead adalah sebuah platform digital untuk membaca buku yang
                  menyediakan akses mudah ke berbagai jenis buku dan membantu
                  penggunanya mengelola koleksi buku digital mereka. Dengan
                  fitur-fitur seperti bookmarking, penanda halaman, dan pengaturan
                  pencahayaan layar yang dapat disesuaikan, pengguna dapat
                  menikmati pengalaman membaca yang nyaman dan personal.
                </p>
              </div>
            </Container>
          </Col>
          <Col sm={4}>
            <div className="container-logo">
              <Image className="about-logo" src={logo} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '2em' }}>
        <h1 className="about-us__title" style={{ textAlign: 'center' }}>
          <span>Meet </span>Our Team
        </h1>
      </Container>
      <Container>
        <Row>
          {/* 1 */}
          <Col sm={4}>
            <div className="about-us__member-card">
              <div className="about-us__member-image">
                <Image src={memberIqbal} alt="member-iqbal" />
              </div>
              <div className="about-us__member-name">
                <h4>Iqbal Abdulrahman</h4>
                <p>Member of Nerokie</p>
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className="about-us__member-info"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <p>As someone who has worked as a barista for 5 years, I have decided to switch careers and become a front-end engineer. During my time as a barista, I have developed skills such as customer service, time management, and teamwork, which I believe could be useful in my new career as a front-end engineer. I am excited to begin designing and developing user interfaces for websites and applications. However, to make a successful transition, I recognize that I will need to acquire technical skills such as proficiency in programming languages and knowledge of web development frameworks. This may require additional education or training to build my expertise in the field of front-end engineering. Overall, I see this career change as a significant opportunity to challenge myself and pursue a rewarding career in a field that aligns with my interests and goals.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: '1em' }}>
        <Container>
          <Row>
            {/* 2 */}
            <Col sm={4}>
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberShobrina} alt="member-shobrina" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Shobrina Fathoniah</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>I am Bachelor of informatics graduate in 2022 at Singaperbangsa karawang university. My strong desire to learn new things can be seen in the bootcamp, seminars, or online courses scholarship that i attend.</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              {/* 3 */}
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberYandi} alt="member-yandi" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Yandi Hiniansyah</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>Hi there! I'm a recent high school graduate who just finished studying Front End Development. I'm passionate about web development and have experience working with HTML, CSS, JavaScript, and front end frameworks. I've also completed some personal projects that have helped me develop my skills in user interface design and development. I'm a dedicated and enthusiastic learner who's eager to jump into real-world projects and continue growing as a Front End Developer. I'm committed to producing high-quality work and I'm always on the lookout for new challenges to expand my skill set.</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              {/* 4 */}
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberAhmad} alt="member-ahmad" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Ahmad Sibly, S.Kom</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>I am a recent graduate in Computer Engineering with a strong interest in Frontend Web Development. I have a fundamental knowledge of HTML, CSS, and JavaScript, and experience in building web applications using ReactJS. I possess the ability to work well in a team, as well as being self-motivated and able to work independently. I am always enthusiastic about self-development and learning new technologies. I believe that with a positive attitude and commitment, I can make a meaningful contribution to my team and organization. I also have excellent interpersonal skills, which enable me to interact effectively with colleagues and clients. I am highly motivated to develop my career in Frontend Web Development and hope to make a positive impact in the technology industry.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ marginTop: '1em' }}>
        <Container>
          <Row>
            {/* 5 */}
            <Col sm={4}>
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberNahrul} alt="member-nahrul" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Nahrul Khayattullah</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>Graduated from Hamzanwadi University majoring Informatics Engineering as a fresh graduate in 2022. I am familiar with Photoshop and Photography based on my experience as Media and Communication team from college.
                    I am confident in my learning ability to learn new things, even though I have experience in computer networks, Linux and Cloud, as well as various multimedia fields such as graphic design, in the end I decided to focus on software engineering as a front end web developer.
                    I have sufficient experience and understanding in this field, relationships and environments such as communities and learning friends have encouraged me to start a career in the world of programming, it may take time but I believe these goals can be achieved with good learning consistency and help me in changing careers to be better.</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              {/* 6 */}
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberIrvan} alt="member-irvan" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Muhammad Irvan</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>I am Muhammad Irvan, a graduate of the Darul Hikmah Pandeglang Banking Vocational School in 2016. And I am currently still studying at Pamulang University, majoring in Informatics Engineering. Having Experience in Digital and Marketplace world and proficient in Microsoft Office Tools. Hobbies are playing games, futsal, watching anime. and I took part in the education crater bootcamp because I was interested in the world of front-end engineering</p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              {/* 7 */}
              <div className="about-us__member">
                <div className="about-us__member-card">
                  <div className="about-us__member-image">
                    <Image src={memberAhmad} alt="member-ahmad" />
                  </div>
                  <div className="about-us__member-name">
                    <h4>Ahmad Sibly, S.Kom</h4>
                    <p>Member of Nerokie</p>
                  </div>
                </div>
                <div className="about-us__member-info">
                  <p>I am a recent graduate in Computer Engineering with a strong interest in Frontend Web Development. I have a fundamental knowledge of HTML, CSS, and JavaScript, and experience in building web applications using ReactJS. I possess the ability to work well in a team, as well as being self-motivated and able to work independently. I am always enthusiastic about self-development and learning new technologies. I believe that with a positive attitude and commitment, I can make a meaningful contribution to my team and organization. I also have excellent interpersonal skills, which enable me to interact effectively with colleagues and clients. I am highly motivated to develop my career in Frontend Web Development and hope to make a positive impact in the technology industry.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}
