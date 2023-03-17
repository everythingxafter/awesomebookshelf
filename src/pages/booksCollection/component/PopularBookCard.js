import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  Stack,
  Row,
  Figure,
} from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MyAlert from "../../../component/alert/MyAlert";
import "./PopularBookCard.css";

export default function PopularBookCard({
  url,
  title,
  bookData,
  dataReadingList,
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
    Array.from(dataReadingList).forEach((dataReading) => {
      if (dataReading?.BookId === bookData?.id) {
        if (!add) {
          setAdd(true);
        }
      }
    });
  }, [add, bookData, dataReadingList]);

  const onClick = async () => {
    const dataBook = new FormData();
    dataBook.append("id", bookData?.id);
    dataBook.append("title", bookData?.Title);
    dataBook.append("url", bookData?.Url);
    dataBook.append("sinopsis", bookData?.Sinopsis);
    dataBook.append("genre", bookData?.Genres);
    dataBook.append("date", bookData?.ReleaseDate);
    dataBook.append("username", bookData?.Username);
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
        show={showModal}
        onHide={() => setShowModal(false)}
        style={{ color: "#fff" }}
        className="container-modal"
      >
        <Row>
          <Col>
            <Figure>
              <Figure.Image height={180} src={url} />
            </Figure>
          </Col>
          <Col>
            <Stack>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Stack>
                  <span
                    style={{
                      height: 100,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "wrap",
                    }}
                  >
                    "{sinopsis}""
                  </span>
                  <Row>
                    <Col>
                      {genreList.slice(0, 3).map((data) => (
                        <Button>{data}</Button>
                      ))}
                    </Col>
                    <Stack gap={3}>
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
                      <Row>
                        <Col>
                          <Button onClick={() => navigate(`/book/${id}`)}>
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
                </Stack>
              </Modal.Body>
            </Stack>
          </Col>
        </Row>
      </Modal>

      <div onClick={() => setShowModal(true)}>
        <div
          style={{
            width: "250px",
            height: "350px",
            backgroundColor: "blue",
            borderRadius: "16px",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            scrollSnapAlign: "start",
          }}
        >
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
        </div>

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
