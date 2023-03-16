import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import "./savedPage.css";

export default function SavedPage() {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const [dataReading, setDataReading] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        access_token,
      },
    };

    const getDataReadingList = async () => {
      try {
        const res = await axios.get("//localhost:5000/readinglist", config);
        setDataReading(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDataReadingList();
  }, [access_token]);

  const onClick = (id) => {
    navigate("/book/" + id);
  };

  return (
    <div style={{ display: "flex", color: "var(--fontColorPrimary)" }}>
      <NavbarSide />
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <div style={{ margin: "2em 0 2em 2em" }}>
          <h1>Reading List</h1>
        </div>
        <Container>
          <div className="saved-page__container">
            {dataReading?.map((value) => {
              return (
                <SortingCard
                  url={value?.Url}
                  title={value?.Title}
                  onClick={() => onClick(value?.BookId)}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
