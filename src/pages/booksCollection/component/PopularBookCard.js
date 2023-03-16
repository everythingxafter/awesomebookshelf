import axios from "axios";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function PopularBookCard({
  url,
  title,
  bookData,
  dataReadingList,
}) {
  const access_token = localStorage.getItem("access_token");
  const [add, setAdd] = useState(false);
  const configDelete = {
    headers: {
      access_token,
    },
    data: {
      bookid: bookData?.id,
    },
  };

  const onClick = async () => {
    const dataBook = {
      id: bookData?.id,
      username: bookData?.Username,
      title: bookData?.Title,
      sinopsis: bookData?.Sinopsis,
      poster: bookData?.Poster,
      url: bookData?.Url,
      stories: bookData?.Stories,
      genres: bookData?.Genres,
      releaseDate: bookData?.ReleaseDate,
    };

    if (add) {
      setAdd(false);
      try {
        const res = await axios.delete(
          "http://localhost:5000/readinglist/remove",
          configDelete
        );
        console.log(res.data.message);
      } catch (error) {
        console.log(error);
      }
    } else if (!add) {
      setAdd(true);
      try {
        const res = await axios.post(
          "//localhost:5000/readinglist/add",
          dataBook,
          {
            headers: {
              access_token,
            },
          }
          );
          
        console.log(res.data.message);
      } catch (error) {
        console.log(error);
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
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "350px",
          backgroundColor: "blue",
          borderRadius: "16px",
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
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
