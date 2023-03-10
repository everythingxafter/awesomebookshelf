import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./Login.css";
import Navbar from "../../component/navbar/Navbar";
import MyAlert from "../../component/alert/MyAlert";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [seen, setSeen] = useState(false);
  const [typePassword, setTypePassword] = useState(false);

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
      //console.log(res);
      const token = res.data.access_token;

      if (token) {
        setToken(token);
        setSeen(false);
      } else {
        setSeen(true);
      }
    } catch (error) {
      setSeen(true);
    }
  };

  if (token) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const onClose = () => {
    setSeen(false);
  };

  const onClick = () => {
    if (typePassword) {
      setTypePassword(false);
    } else if (!typePassword) {
      setTypePassword(true);
    }
  };

  const handleHiddenPassword = (type) => {
    if (type) {
      return <AiFillEye className="icon" size={30} onClick={onClick} />;
    } else if (!type) {
      return (
        <AiFillEyeInvisible className="icon" size={30} onClick={onClick} />
      );
    }
  };

  return (
    <div className="page">
      <Navbar />
      {MyAlert(
        "Notice",
        onClose,
        "Your email or password is wrong! \nPlease try again :)",
        seen
      )}
      <div className="container">
        <Image className="logo" src={Logo} alt="Logo" />
        <h3 className="textH3">Welcome</h3>
        <h4 className="textH4">Read Without Limit</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label className="label" for="username">
              Username or Email
            </Form.Label>
            <Form.Control
              id="username"
              type="text"
              className="input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <div className="passwordInput">
              <Form.Control
                className="input"
                type={typePassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {handleHiddenPassword(typePassword)}
            </div>
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
