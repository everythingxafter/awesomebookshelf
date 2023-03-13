import React from "react";
import { Link } from "react-router-dom";
import NavbarSide from "../../component/navbar/NavbarSide";
import './BooksCollection.css'
import NavbarSearch from "./component/NavbarSearch";

export default function BooksCollection() {
    return (
        <div style={{ display: "flex" }}>
            <NavbarSide />
            <div style={{ width: "100%" }}>
                <NavbarSearch />
                <p>ini BooksCollection</p>
                <Link to={`/book`}>ke buku</Link>
            </div>

        </div>
    )
}