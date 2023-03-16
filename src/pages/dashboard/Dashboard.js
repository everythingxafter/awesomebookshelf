import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyAlert from "../../component/alert/MyAlert";
import Loading from "../../component/loading/Loading";
import NavbarSearch from "../../component/navbar/NavbarSearch";
import NavbarSide from "../../component/navbar/NavbarSide";
import DashboardCard from "./component/DashboardCard";
import "./Dashboard.css";

export default function Dashboard() {
  const access_token = localStorage.getItem("access_token");
  const username = localStorage.getItem("username");
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dataBook = [];

  data.filter((value) => {
    if (value?.Username === username) {
      dataBook.push(value);
    }

    return dataBook;
  });

  const getUserBookData = async (e) => {
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
    getUserBookData();
  }, []);

  const onUpdate = (id) => {
    navigate("/updatebook/" + id);
  };

  const config = {
    headers: {
      access_token,
    },
  };

  const onDelete = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        "//localhost:5000/content/delete/" + id,
        config
      );
      setMessage(res.data.message);
      navigate("/dashboard");
      setAlert(true);
      setLoading(false);
    } catch (error) {
      setAlert(true);
      console.log(error);
      setLoading(false);
    }
  };

  const onClose = () => {
    setAlert(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <NavbarSide />
      {MyAlert(
        "Notice",
        onClose,
        message ? message : "Failed to Delete The Data",
        alert
      )}
      <div style={{ width: "100%" }}>
        <NavbarSearch username={username} />
        <Container
          style={{
            marginTop: "3em",
            marginBottom: "2em",
            color: "var(--fontColorPrimary)",
          }}
        >
          <h1>Your book</h1>
        </Container>
        <Container
          style={{ display: "flex", gap: "1em", flexDirection: "column" }}
        >
          {dataBook.length > 0 ? (
            dataBook?.map((data) => {
              return (
                <DashboardCard
                  title={data?.Title}
                  genre={data?.Genres}
                  pageView={data?.PageViews}
                  publishAt={data?.createdAt}
                  updateAt={data?.updatedAt}
                  url={data?.Url}
                  onUpdate={() => onUpdate(data?.id)}
                  onDelete={() => onDelete(data?.id)}
                />
              );
            })
          ) : (
            <Loading seen={loading} />
          )}
        </Container>
      </div>
    </div>
  );
}
