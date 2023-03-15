import React, { useEffect, useState } from "react";
import NavbarSide from "../../component/navbar/NavbarSide";
import "./BooksCollection.css";
import CarouselCollection from "./component/CarouselCollection";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import PopularBook from "./component/PopularBook";
import axios from "axios";

export default function BooksCollection() {
  const [data, setData] = useState([]);
  const dataPopular = data?.sort((a, b) => {
    return b.PageViews - a.PageViews;
  });

  const dataCarousel = dataPopular.slice(0, 3)

  const getData = async () => {
    try {
      const res = await axios.get("//localhost:5000/content/data");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <NavbarSide />
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <CarouselCollection data={dataCarousel} />
        <PopularBook data={dataPopular} />
      </div>
    </div>
  );
}
