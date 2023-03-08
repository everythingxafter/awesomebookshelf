import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

export default function Login() {
    return (
        <div>
            <Link to={`/`}>back to Home</Link>
            <p>ini Login</p>
            <Link to={`/dashboard`}>login</Link>
        </div>
    )
}