import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import MyAlert from "../../../component/alert/MyAlert";

export default function PopularBookCard({
  url,
  title,
  bookData,
}) {
  const access_token = localStorage.getItem("access_token");
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [dataReadingList, setDataAdd] = useState([]);
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
      <Container
        style={{
          marginTop: "1em",
          marginBottom: "1em",
          color: "var(--fontColorPrimary)",
        }}
      >
        <h1 className="fs-4">{title}</h1>
      </Container>
    </div>
  );
}
