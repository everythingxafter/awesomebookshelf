import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
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
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
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
      setAlert(true);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      getUserBookData()
    } catch (error) {
      setAlert(true);
      setMessage(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
      getUserBookData()
    }
  };

  const onClose = () => {
    setAlert(false);
  };

  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      onDelete(deleteTarget.id);
    }
    setDeleteTarget(null);
    setShowModal(false);
  };

  const handleDeleteCancel = () => {
    setDeleteTarget(null);
    setShowModal(false);
  };

  const handleDeleteOpenModal = (id) => {
    setDeleteTarget({ id });
    setShowModal(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <NavbarSide />
      {MyAlert("Notice", onClose, message, alert, true, "", getUserBookData)}

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
          {loading ? (
            <Loading seen={loading} />
          ) : dataBook.length > 0 ? (
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
                  onDelete={() => handleDeleteOpenModal(data?.id)} />
              );
            })
          ) : (
            <h4 style={{ color: "white" }}>
              You didn't write any story, Write your own Stories
            </h4>
          )}
          <Modal show={showModal} onHide={handleDeleteCancel}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this book?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleDeleteCancel}>
                No
              </Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </div>
  );
}
