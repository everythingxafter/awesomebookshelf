import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./Login.css";
import Navbar from "../../component/navbar/Navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const login = async (username, password) => {
    const dataUser = {
      username: username,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.post(
        "//localhost:3000/login",
        JSON.stringify(dataUser),
        config
      );
      console.log(res);
      const token = res.data.access_token;

      if (token) {
        setToken(token);
      } else {
        setToken("");
      }
    } catch (error) {
      setToken("");
    }
  };

  if (token) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="page">
      <Navbar />

      <div className="container">
        <Image className="logo" src={Logo} alt="Logo" />

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label className="label">Username</Form.Label>
            <Form.Control
              type="text"
              className="input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <div className="buttonContainer">
            <Button className="button" variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
