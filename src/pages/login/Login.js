import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.png";
import "./Login.css";
import MyAlert from "../../component/alert/MyAlert";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [typePassword, setTypePassword] = useState(false);

  const navigate = useNavigate();

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
        "//localhost:5000/login",
        JSON.stringify(dataUser),
        config
      );

      const token = res.data.access_token;

      if (token) {
        localStorage.setItem("access_token", token);
        navigate("/dashboard");
        setAlert(false);
      } else {
        setAlert(true);
      }
    } catch (error) {
      setAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const onClose = () => {
    setAlert(false);
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
      return <AiFillEye className="login-icon" size={30} onClick={onClick} />;
    } else if (!type) {
      return (
        <AiFillEyeInvisible
          className="login-icon"
          size={30}
          onClick={onClick}
        />
      );
    }
  };

  return (
    <div className="login-page">
      {MyAlert(
        "Notice",
        onClose,
        "Your email or password is wrong! \n\nPlease try again :)",
        alert
      )}
      <div className="login-container">
        <Image className="login-logo" src={Logo} alt="Logo" />
        <h3 className="login-textH3">Welcome</h3>
        <h4 className="login-textH4">Read Without Limit</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label className="login-label" for="username">
              Username or Email
            </Form.Label>
            <Form.Control
              id="username"
              type="text"
              className="login-input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login-label">Password</Form.Label>
            <div className="login-passwordInput">
              <Form.Control
                className="login-input"
                type={typePassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {handleHiddenPassword(typePassword)}
            </div>
          </Form.Group>
          <div className="login-buttonContainer">
            <Button className="login-button" variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
