import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../component/navbar/Navbar";
import "./BooksCollection.css";

export default function BooksCollection() {
  return (
    <div>
      {/* <Navbar /> */}
      <p>ini BooksCollection</p>
      <Link to={`/book`}>ke buku</Link>
    </div>
  );
}
