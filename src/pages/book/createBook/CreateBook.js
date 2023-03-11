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
  const [imageUrl, setImageUrl] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [bookRelease, setBookRelease] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const dataBook = {
    name: bookName,
    image: imageUrl,
    description1: genre,
    description2: sinopsis,
    description3: bookRelease,
    description4: author,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      access_token: access_token,
    },
  };

  const sendData = async (data) => {
    try {
      const res = await axios.post(
        "//localhost:8080/content/create",
        data,
        config
      );

      const message = res.data.message;
      setAlert(true);
      setMessage(message);
    } catch (error) {
      setAlert(true);
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
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="imageUrl">
                Image URL
              </Form.Label>
              <Form.Control
                id="imageUrl"
                type="text"
                className="createBook-input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 createBook-row">
              <Form.Label className="createBook-label" for="author">
                Author
              </Form.Label>
              <Form.Control
                id="author"
                type="text"
                className="createBook-input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
