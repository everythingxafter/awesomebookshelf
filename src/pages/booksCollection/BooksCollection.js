import React, { useEffect, useState } from "react";
import NavbarSide from "../../component/navbar/NavbarSide";
import "./BooksCollection.css";
import CarouselCollection from "./component/CarouselCollection";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import PopularBook from "./component/PopularBook";
import axios from "axios";

export default function BooksCollection() {
  const [data, setData] = useState([]);
  const [dataAdd, setDataAdd] = useState({});
  const [loading, setLoading] = useState(false);
  const access_token = localStorage.getItem("access_token");
  const dataPopular = data?.sort((a, b) => {
    return b.PageViews - a.PageViews;
  });

  const dataCarousel = dataPopular.slice(0, 3);

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

    getData();
    getAdd();
  }, [access_token]);

  return (
    <div style={{ display: "flex" }}>
      <NavbarSide />
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <CarouselCollection data={dataCarousel} loading={loading} />
        <PopularBook
          data={dataPopular}
          dataReadingList={dataAdd}
          loading={loading}
        />
      </div>
    </div>
  );
}
