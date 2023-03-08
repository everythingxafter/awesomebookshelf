import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <p>ini LandingPage</p>
            <Link to={`/bookscollection`}>Baca</Link>
            <br></br>
            <Link to={`/login`}>Login</Link>
        </div>
    )
}