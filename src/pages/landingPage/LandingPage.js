import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hero, Benefit, Abook, Weekly, Footer } from "../../component";
import NavbarHome from "../../component/navbar/NavbarHome";

import "./LandingPage.css";
export default function LandingPage() {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const dataTopBook = data.sort((a, b) => {
    return b.PageViews - a.PageViews;
  });

  const randomNumber = Math.floor(Math.random() * dataLength);
  const dataRandom = data[randomNumber];

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("//localhost:5000/content/data");
      setData(res.data);
      setDataLength(res.data.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <NavbarHome />
      <Hero />
      <Benefit />
      <Abook data={dataRandom} loading={loading} />
      <Weekly data={dataTopBook} loading={loading} />
      <Footer />
    </React.Fragment>
  );
}
