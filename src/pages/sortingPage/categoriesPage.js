import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import "./categoriesPage.css";
import axios from "axios";

export default function CategoriesPage() {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [totalData, setTotalData] = useState([0]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getGenres = async () => {
      const response = await axios.get(`http://localhost:5000/get/genre`);
      const arr = [];
      for (let i = 0; i < response.data.length; i++) {
        arr.push(response.data[i].genre.split(", "));
      }
      const newArr = [...new Set(arr.flat())];
      newArr.sort((a, b) => a.localeCompare(b));
      setGenres(newArr);
    };
    getGenres();

    const searchContent = async () => {
      const response = await axios.get(`http://localhost:5000/content/data/search?query=${keyword}`);
      setContent(response.data.result);
      setTotalData(response.data.totalData);
    };
    searchContent();

    document.title = `iRead | Categories`;
  }, [keyword]);

  const handleButton = (key) => {
    setKeyword(key);
  };

  console.log(content);
  return (
    <div style={{ display: "flex", color: "var(--fontColorPrimary)" }}>
      <NavbarSide />
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <Container>
          <div className="categories-page__tags">
            {genres.map((data) => (
              <Button onClick={() => handleButton(data)}>{data}</Button>
            ))}
          </div>
          <div>
            <h1 className="fs-3">
              {!keyword ? "Filter by : KeyTags" : `Filter by : ${keyword} | Result : ${totalData}`}
            </h1>
          </div>
          <Container>
            <div className="categories-page__container">
              <SortingCard url={content.Url} title={content.Title} />
            </div>
          </Container>
        </Container>
      </div>
    </div>
  );
}
