import React, { useEffect, useState } from "react";
import "./style/Book.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import NavbarHome from "../../component/navbar/NavbarHome";
import { Footer, Weekly } from "../../component";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyAlert from "../../component/alert/MyAlert";

export default function Book() {
  const access_token = localStorage.getItem("access_token");
  const { id } = useParams();
  const [ContentById, setContentById] = useState([]);
  const [Genre, setGenre] = useState([]);
  const [dataReadingList, setDataAdd] = useState([]);
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const configDelete = {
    headers: {
      access_token,
    },
    data: {
      bookid: ContentById?.id,
    },
  };

  const dataTopBook = data.sort((a, b) => {
    return b.PageViews - a.PageViews;
  });

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("//localhost:5000/content/data");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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

    const getContentById = async () => {
      const response = await axios.get(
        `http://localhost:5000/content/data/${id}`
      );
      setContentById(response.data);
      if (response.data !== undefined) {
        setGenre(response.data.Genres.split(", "));
      } else {
        console.log("nice try");
      }
    };

    getContentById();
    getAdd();
    getData();

    document.title = `iRead | ${ContentById.Title}`;
  }, [id, ContentById.Title, access_token]);

  Array.from(dataReadingList).forEach((dataReading) => {
    if (dataReading?.BookId === ContentById?.id) {
      if (!add) {
        setAdd(true);
      }
    }
  });

  const onClick = async () => {
    const dataBook = new FormData();
    dataBook.append("id", ContentById?.id);
    dataBook.append("title", ContentById?.Title);
    dataBook.append("url", ContentById?.Url);

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

  const changeBookmarked = (status) => {
    if (status) {
      return (
        <Button
          className="d-flex justify-content-between align-items-center px-4 mb-4"
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#00CD52",
            fontSize: "22px",
            border: "none",
          }}
          onClick={() => onClick()}
        >
          <span>
            <FaBookmark />
          </span>
          Saved to reading list
        </Button>
      );
    } else if (!status) {
      return (
        <Button
          className="d-flex justify-content-between align-items-center px-4 mb-4"
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "#108ADC",
            // backgroundColor: "#00CD52",
            fontSize: "22px",
            border: "none",
          }}
          onClick={() => onClick()}
        >
          <span>
            <FaRegBookmark />
          </span>
          Save to reading list
        </Button>
      );
    }
  };

  const onClose = () => {
    setAlert(false);
  };

  console.log(Genre);
  return (
    <div>
      <NavbarHome />
      {MyAlert("Notice", onClose, message, alert)}
      <section className="wrap-book">
        <img src={ContentById.Url} alt="" className="bannerBook" />
        <Container className="mt-5 ContainerBook">
          <Row className="mb-5">
            <Col lg={4} className="d-flex flex-column align-items-center">
              <div className="book__poster-left">
                <img
                  src={ContentById.Url}
                  alt={ContentById.Poster}
                  className="posterBook mb-4"
                />
                {changeBookmarked(add)}
              </div>
              {/* <Button
                variant="success"
                className="d-flex justify-content-start align-items-center px-4"
                style={{
                  width: "293px",
                  height: "50px",
                  backgroundColor: "#108ADC",
                  fontSize: "22px",
                }}
              >
                <span className="me-3">
                  <FaHeart />
                </span>
                Like
              </Button> */}
            </Col>
            <Col lg={8}>
              <div className="book__body-right">
                <div className=" d-flex align-items-end">
                  <h1
                    className="fw-bold"
                    style={{ fontSize: "34px", lineHeight: "50px" }}
                  >
                    {ContentById.Title}
                  </h1>
                </div>
                <Row>
                  <Col lg={3} md={6}>
                    <div className="infobook">
                      <p className="mb-0">
                        <strong>Publish On</strong>
                      </p>
                      <p>{ContentById.ReleaseDate}</p>
                    </div>
                  </Col>
                  <Col lg={3} md={6}>
                    <div className="infobook">
                      <p className="mb-0">
                        <strong>Author</strong>
                      </p>
                      <p>{ContentById.Username}</p>
                    </div>
                  </Col>
                  <Col lg={6} md={12}>
                    <div className="infobook">
                      {Genre.map((data) => (
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
                </Row>
                <div style={{ maxWidth: "833px", marginTop: "3em" }}>
                  <pre
                    style={{ fontSize: "18px", whiteSpace: "pre-wrap" }}
                    className="mb-4 pt-2"
                  >
                    {ContentById.Stories}
                  </pre>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Weekly data={dataTopBook.slice(0, 10)} loading={loading} />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
