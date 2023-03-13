import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MyAlert from "../../../component/alert/MyAlert";
import Navbar from "../../../component/navbar/Navbar";
import "./createBook.css";

export default function CreateBook() {
  const access_token = localStorage.getItem("access_token");
  const [alert, setAlert] = useState(false);
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [bookRelease, setBookRelease] = useState("");
  const [stories, setStories] = useState("");
  const [message, setMessage] = useState("");
  // const fileName = file.split("\\");

  const dataBook = new FormData();
  dataBook.append("title", bookName);
  dataBook.append("file", file);
  dataBook.append("sinopsis", sinopsis);
  dataBook.append("stories", stories);
  dataBook.append("genres", genre);
  dataBook.append("releaseDate", bookRelease);

  const config = {
    headers: {
      "Content-Type": "multipart/from-data",
      access_token: access_token,
    },
  };
  console.log(dataBook);
  const sendData = async (data) => {
    try {
      const res = await axios.post(
        "//localhost:5000/content/create",
        data,
        config
      );

      const message = res.data.message;
      setAlert(true);
      setMessage(message);
    } catch (error) {
      setAlert(true);
      console.log(error);
    }
  };

  const submitBook = (e) => {
    e.preventDefault();
    sendData(dataBook);
  };

  const onClose = () => {
    setAlert(false);
  };

  return (
    <div className="createBook-page">
      <Navbar />
      {MyAlert(
        "Notice",
        onClose,
        message ? message : "Please try again :)",
        alert
      )}
      <div>
        <h1 className="createBook-text">Create data</h1>

        <Form className="createBook-container" onSubmit={(e) => submitBook(e)}>
          <div className="createBook-containerColumn">
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="bookName">
                Book Name
              </Form.Label>
              <Form.Control
                id="bookName"
                type="text"
                className="createBook-input"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="genre">
                Genre
              </Form.Label>
              <Form.Control
                id="genre"
                type="text"
                className="createBook-input"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 createBook-row"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                className="createBook-label createBook-center"
                for="sinopsis"
              >
                Sinopsis
              </Form.Label>
              <Form.Control
                id="sinopsis"
                as="textarea"
                className="createBook-inputTextArea"
                rows={5}
                value={sinopsis}
                onChange={(e) => setSinopsis(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="createBook-containerColumn createBook-upper">
            <Form.Group className="mb-3 createBook-row" controlId="formFile">
              <Form.Label className="createBook-label" for="image">
                Image
              </Form.Label>
              <Form.Control
                id="image"
                type="file"
                className="createBook-input"
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                  setFile(e.target.files[0]);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="bookRelease">
                Book Release
              </Form.Label>
              <Form.Control
                id="bookRelease"
                type="text"
                className="createBook-input"
                value={bookRelease}
                onChange={(e) => setBookRelease(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="stories">
                Stories
              </Form.Label>
              <Form.Control
                id="stories"
                type="textarea"
                className="createBook-inputTextArea"
                value={stories}
                rows={10}
                onChange={(e) => setStories(e.target.value)}
              />
            </Form.Group>
            <div className="createBook-buttonContainer">
              <Button
                className="createBook-button"
                variant="primary"
                type="submit"
              >
                Create
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
