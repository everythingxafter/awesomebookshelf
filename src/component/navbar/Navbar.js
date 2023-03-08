import React from "react";
import './Navbar.css'
import { Link, } from "react-router-dom";



export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/bookscollection`}>Book Collection</Link>
                </li>
                <li>
                    <Link to={`/login`}>Login</Link>
                </li>
                <li>
                    <Link to={`/aboutus`}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}