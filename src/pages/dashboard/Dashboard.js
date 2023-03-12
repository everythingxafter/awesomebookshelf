import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DashboardNavbar from "./component/DashboardNavbar";
import "./Dashboard.css";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const random = Math.floor(Math.random() * 11);
  const [preliminaryData, setPreliminaryData] = useState({});

  const onClick = () => {
    navigate("/updatebook", {
      state: {
        id: random,
        preliminaryData,
      },
    });
  };

  useEffect(() => {
    const configGet = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const getData = async () => {
      try {
        const data = await axios.get(
          `//localhost:8080/content/data/${random}`,
          configGet
        );
        setPreliminaryData(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [random]);

  return (
    <div>
      <DashboardNavbar />
      <p>ini Dashboard</p>
      <button onClick={onClick}>goTO update</button>
    </div>
  );
}
