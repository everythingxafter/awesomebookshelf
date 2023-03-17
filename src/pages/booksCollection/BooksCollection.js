import React, { useEffect, useState } from "react";
import NavbarSide from "../../component/navbar/NavbarSide";
import "./BooksCollection.css";
import CarouselCollection from "./component/CarouselCollection";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import PopularBook from "./component/PopularBook";
import axios from "axios";

export default function BooksCollection() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    getData()
  }, [])

  return (
    <div style={{ display: "flex" }}>
      <NavbarSide />
      <div style={{ width: "100%" }}>
        <NavbarSearch />
        <CarouselCollection data={dataCarousel} loading={loading} />
        <PopularBook
          data={dataPopular}
          loading={loading}
        />
      </div>
    </div>
  );
}
