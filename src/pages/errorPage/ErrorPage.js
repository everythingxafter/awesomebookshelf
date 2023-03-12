import React from "react";
import { Link, useRouteError } from "react-router-dom";
// import Navbar from "../../component/navbar/Navbar";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      {/* <Navbar /> */}
      <p>ini Error Page</p>
      <p>Kamu tersesat, silahkan kembali ke home</p>
      <i>{error.statusText || error.message}</i>
      <Link to={`/`}>back to home</Link>
    </div>
  );
}
