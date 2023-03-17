import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Stack, Row, Image, Container } from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MyAlert from "../../../component/alert/MyAlert";
import "./PopularBookCard.css";

export default function PopularBookCard({
  url,
  title,
  bookData,
  sinopsis,
  genre,
  date,
  username,
  id,
}) {
  const access_token = localStorage.getItem("access_token");
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [dataReadingList, setDataAdd] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const genreList = genre.split(", ");

  const configDelete = {
    headers: {
      access_token,
    },
    data: {
      bookid: bookData?.id,
    },
  };

  useEffect(() => {
    const config = {
      headers: {
        access_token,
      },
    };

    const getAdd = async () => {
      try {
        const res = await axios.get("//localhost:5000/readinglist", config);
        setDataAdd(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAdd();
  }, [access_token]);

  Array.from(dataReadingList).forEach((dataReading) => {
    if (dataReading?.BookId === bookData?.id) {
      if (!add) {
        setAdd(true);
      }
    }
  });

  const onClick = async () => {
    const dataBook = new FormData();
    dataBook.append("id", bookData?.id);
    dataBook.append("title", bookData?.Title);
    dataBook.append("url", bookData?.Url);
    //dataBook.append("sinopsis", bookData?.Sinopsis);
    // dataBook.append("genre", bookData?.Genres);
    //dataBook.append("date", bookData?.ReleaseDate);
    //dataBook.append("username", bookData?.Username);
    setShowModal(true);

    if (add) {
      try {
        const res = await axios.delete(
          "http://localhost:5000/readinglist/remove",
          configDelete
        );

        setAdd(false);
        setMessage(res.data.message);
        setAlert(true);
      } catch (error) {
        setAlert(true);
        setMessage(error.response.data.message);
      }
    } else if (!add) {
      try {
        const res = await axios.post(
          "//localhost:5000/readinglist/add",
          dataBook,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              access_token,
            },
          }
        );

        setAdd(true);
        setMessage(res.data.message);
        setAlert(true);
      } catch (error) {
        setMessage(error.response.data.message);
        setAlert(true);
      }
    }
  };

  const navigate = useNavigate();

  const changeBookmarked = (status) => {
    if (status) {
      return <FaBookmark />;
    } else if (!status) {
      return <FaRegBookmark />;
    }
  };

  const onClose = () => {
    setAlert(false);
  };

  return (
    <div>
      {MyAlert("Notice", onClose, message, alert)}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Row>
          <Col>
            <Container>
              <div style={{
                margin: "1em",
                display: "flex",
                justifyContent: "center",
              }}>
                <Image src={url} alt={url}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Container>
          </Col>
          <Col>
            <div>
              <Stack>
                <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Stack>
                    <div
                      style={{
                        height: '20vh',
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "wrap",
                        marginBottom: "1em"
                      }}
                    >
                      <p>
                        "{sinopsis}"
                      </p>
                    </div>
                  </Stack>
                  <Row>
                    <Col>
                      <div style={{
                        marginBottom: '1em'
                      }}>
                        {genreList.slice(0, 3).map((data) => (
                          <Button
                            variant="success"
                            size="sm"
                            className="me-1 mb-1"
                          >
                            {data}
                          </Button>
                        ))}
                      </div>
                    </Col>
                    <Stack gap={3}>
                      <div style={{
                        marginBottom: '1em'
                      }}>
                        <Row>
                          <Row>
                            <Col>Published On</Col>
                            <Col>Author</Col>
                          </Row>
                          <Row>
                            <Col>{date}</Col>
                            <Col>{username}</Col>
                          </Row>
                        </Row>
                      </div>
                      <Row>
                        <Col>
                          <Button
                            onClick={() => navigate(`/book/${id}`)}
                            size="sm"
                            className="me-1 mb-1"
                          >
                            Read Now
                          </Button>
                        </Col>
                        <Col>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row-reverse",
                            }}
                          >
                            <Button variant="danger" onClick={() => onClick()}>
                              {changeBookmarked(add)}
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Stack>
                  </Row>
                </Modal.Body>
              </Stack>
            </div>
          </Col>
        </Row>
      </Modal>

      <div>
        <div
          onClick={() => setShowModal(true)}
          style={{
            width: "250px",
            height: "350px",
            backgroundColor: "blue",
            borderRadius: "16px",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            scrollSnapAlign: "start",
          }}
        ></div>

        <Row
          style={{
            marginTop: "1em",
            marginBottom: "1em",
            color: "var(--fontColorPrimary)",
          }}
        >
          <h1 className="fs-4">{title}</h1>
        </Row>
      </div>
    </div>
  );
}
