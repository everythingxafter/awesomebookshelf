import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hero, Benefit, Abook, Weekly, Footer } from "../../component";
import NavbarHome from "../../component/navbar/NavbarHome";

import "./LandingPage.css";
export default function LandingPage() {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  const dataTopBook = data.sort((a, b) => {
    return b.PageViews - a.PageViews;
  });

  const randomNumber = Math.floor(Math.random() * dataLength);
  const dataRandom = data[randomNumber];
  
  const getData = async () => {
    try {
      const res = await axios.get("//localhost:5000/content/data");
      setData(res.data);
      setDataLength(res.data.length);
    } catch (error) {
      console.log(error);
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
      <Abook data={dataRandom} />
      <Weekly data={dataTopBook} />
      <Footer />
    </React.Fragment>
  );
}
