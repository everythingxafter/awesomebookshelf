import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import MyAlert from "../../component/alert/MyAlert";
import "./UpdateBook.css";

export default function UpdateBook() {
  const access_token = localStorage.getItem("access_token");
  const [preliminaryData, setPreliminaryData] = useState({});
  const { id } = useParams();
  const [alert, setAlert] = useState(false);
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [bookRelease, setBookRelease] = useState("");
  const [stories, setStories] = useState("");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");

  const dataBookUpdated = new FormData();
  dataBookUpdated.append("title", bookName);
  if (file) {
    dataBookUpdated.append("file", file);
  }
  dataBookUpdated.append("sinopsis", sinopsis);
  dataBookUpdated.append("stories", stories);
  dataBookUpdated.append("genres", genre);
  dataBookUpdated.append("releaseDate", bookRelease);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      access_token,
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("//localhost:5000/content/data/" + id);
        setPreliminaryData(res.data);
        setBookName(preliminaryData?.Title);
        setSinopsis(preliminaryData?.Sinopsis);
        setBookRelease(preliminaryData?.ReleaseDate);
        setStories(preliminaryData?.Stories);
        setPreview(preliminaryData?.Url);
        setGenre(preliminaryData?.Genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [
    id,
    preliminaryData?.Genres,
    preliminaryData?.Url,
    preliminaryData?.Title,
    preliminaryData?.Sinopsis,
    preliminaryData?.ReleaseDate,
    preliminaryData?.Stories,
  ]);

  const updateData = async (e, data) => {
    e.preventDefault();

    try {
      const res = await axios.patch(
        "//localhost:5000/content/update/" + id,
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

  console.log(preliminaryData);

  const submitBook = (e) => {
    e.preventDefault();
    updateData(e, dataBookUpdated);
  };

  const onClose = () => {
    setAlert(false);
  };

  return (
    <div className="updateBook-page">
      {MyAlert(
        "Notice",
        onClose,
        message ? message : "Please try again :)",
        alert,
        true,
        "/dashboard"
      )}
      <div>
        <h1 className="updateBook-text">Update Data</h1>

        <Form className="updateBook-container" onSubmit={(e) => submitBook(e)}>
          <div className="updateBook-containerColumn updateBook-upper">
            <Form.Group
              className="mb-3 updateBook-row"
              controlId="exampleForm.ControlInput1"
            >
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
            <Form.Group
              className="mb-3 updateBook-row"
              controlId="exampleForm.ControlInput1"
            >
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
          <div className="updateBook-containerColumn ">
            <Form.Group className="mb-3 updateBook-row" controlId="formFile">
              <Form.Label className="updateBook-label" for="file">
                Image
              </Form.Label>

              <Form.Control
                id="file"
                type="file"
                className="updateBook-inputFile"
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                  setFile(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </Form.Group>
            <div className="updateBook-containerImage">
              {preview ? (
                <img className="updateBook-image" src={preview} alt="Preview" />
              ) : null}
            </div>

            <Form.Group
              className="mb-3 updateBook-row"
              controlId="exampleForm.ControlInput1"
            >
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
            <Form.Group
              className="mb-3 updateBook-row"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="updateBook-label" for="stories">
                Stories
              </Form.Label>
              <Form.Control
                id="stories"
                as="textarea"
                className="updateBook-input"
                rows={10}
                value={stories}
                onChange={(e) => setStories(e.target.value)}
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
