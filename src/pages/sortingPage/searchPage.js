import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import MyAlert from "../../component/alert/MyAlert";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import SortingCard from "./component/sortingCard";
import "./searchPage.css";

export default function SearchPage() {
  const { state } = useLocation();
  const { search } = state;
  const [dataSearch, setDataSearch] = useState([]);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [dataLength, setDataLength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getSearch = async () => {
      try {
        const res = await axios.get(
          "//localhost:5000/content/data/search?query=" + search
        );
        setDataSearch(res.data.result);
        setDataLength(res.data.result.length);
      } catch (error) {
        console.log(error);
        setAlert(true);
        setMessage(error.response.data.message);
      }
    };

    getSearch();
  }, [search]);

  const onClose = () => {
    setAlert(false);
  };

  const onClick = (id) => {
    navigate("/book/" + id);
  };

  return (
    <div style={{ display: "flex", color: "var(--fontColorPrimary)" }}>
      <NavbarSide />
      {MyAlert("Notice", onClose, message, alert)}
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <div style={{ margin: "2em 0 2em 2em" }}>
          <h1>Search Result</h1>
        </div>
        <Container>
          <div className="search-page__container">
            {dataLength > 0 ? (
              dataSearch?.map((value) => {
                return (
                  <SortingCard
                    url={value?.Url}
                    title={value?.Title}
                    onClick={() => onClick(value?.id)}
                  />
                );
              })
            ) : (
              <h3>Data Not Found</h3>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
