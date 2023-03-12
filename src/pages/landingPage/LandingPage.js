import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../../component/navbar/NavbarHome";
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div>
            <NavbarHome />
            <p>ini LandingPage</p>
            <Link to={`/bookscollection`}>Baca</Link>
            <br></br>
            <Link to={`/login`}>Login</Link>
        </div>
    )
}