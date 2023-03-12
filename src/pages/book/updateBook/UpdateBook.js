import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router";
//import MyAlert from "../../../component/alert/MyAlert";
import Navbar from "../../../component/navbar/Navbar";
import "./UpdateBook.css";

export default function UpdateBook() {
  const access_token = localStorage.getItem("access_token");
  const { state } = useLocation();
  const { id, preliminaryData } = state;
  const [alert, setAlert] = useState(false);
  const [bookName, setBookName] = useState(preliminaryData?.name);
  const [genre, setGenre] = useState(preliminaryData?.description1);
  const [imageUrl, setImageUrl] = useState(preliminaryData?.image);
  const [sinopsis, setSinopsis] = useState(preliminaryData?.description2);
  const [bookRelease, setBookRelease] = useState(preliminaryData?.description3);
  const [author, setAuthor] = useState(preliminaryData?.description4);
  const [message, setMessage] = useState("");

  const dataBookUpdated = {
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

  console.log(preliminaryData, "data");
  const updateData = async (data) => {
    try {
      const res = await axios.put(
        `//localhost:8080/content/update/${id}`,
        data,
        config
      );

      const message = res.data.message;
      setAlert(true);
      setMessage(message);
      console.log(message, "message put");
    } catch (error) {
      setAlert(true);
      console.log(error);
    }
  };

  const submitBook = (e) => {
    e.preventDefault();
    updateData(dataBookUpdated);
  };

  const onClose = () => {
    setAlert(false);
  };

  return (
    <div className="updateBook-page">
      <Navbar />
      {
        //MyAlert(
        // "Notice",
        // onClose,
        // message ? message : "Please try again :)",
        // alert
        // )
      }
      <div>
        <h1 className="updateBook-text">update data</h1>

        <Form className="updateBook-container" onSubmit={(e) => submitBook(e)}>
          <div className="updateBook-containerColumn">
            <Form.Group className="mb-3 updateBook-row">
              <Form.Label className="updateBook-label" for="bookName">
                Book Name
              </Form.Label>
              <Form.Control
                id="bookName"
                type="text"
                className="updateBook-input"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 updateBook-row">
              <Form.Label className="updateBook-label" for="genre">
                Genre
              </Form.Label>
              <Form.Control
                id="genre"
                type="text"
                className="updateBook-input"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 updateBook-row"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                className="updateBook-label updateBook-center"
                for="sinopsis"
              >
                Sinopsis
              </Form.Label>
              <Form.Control
                id="sinopsis"
                as="textarea"
                className="updateBook-inputTextArea"
                rows={5}
                value={sinopsis}
                onChange={(e) => setSinopsis(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="updateBook-containerColumn updateBook-upper">
            <Form.Group className="mb-3 updateBook-row">
              <Form.Label className="updateBook-label" for="imageUrl">
                Image URL
              </Form.Label>
              <Form.Control
                id="imageUrl"
                type="text"
                className="updateBook-input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 updateBook-row">
              <Form.Label className="updateBook-label" for="author">
                Author
              </Form.Label>
              <Form.Control
                id="author"
                type="text"
                className="updateBook-input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 updateBook-row">
              <Form.Label className="updateBook-label" for="bookRelease">
                Book Release
              </Form.Label>
              <Form.Control
                id="bookRelease"
                type="text"
                className="updateBook-input"
                value={bookRelease}
                onChange={(e) => setBookRelease(e.target.value)}
              />
            </Form.Group>
            <div className="updateBook-buttonContainer">
              <Button
                className="updateBook-button"
                variant="primary"
                type="submit"
              >
                Update
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
