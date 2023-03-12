import React from "react";
import { Link } from "react-router-dom";
import NavbarSide from "../../component/navbar/NavbarSide";
import './BooksCollection.css'

export default function BooksCollection() {
    return (
        <div>
            <NavbarSide />
            <p>ini BooksCollection</p>
            <Link to={`/book`}>ke buku</Link>
        </div>
    )
}