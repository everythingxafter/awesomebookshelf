import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        //Navigate()
        alert(`Berhasil Login, ${token}`);
      } else {
        alert("gagal");
      }
    } catch (error) {
      console.log(error);
      //alert(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <Link to={`/`}>back to Home</Link>
      <Link to={`/dashboard`}>login</Link>

      <div className="page">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="form">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div className="usernameContainer">
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </Form.Group>
            </div>
            <div className="passwordContainer">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
