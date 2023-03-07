import React from "react";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Book from "../../pages/book/Book";
import LandingPage from "../../pages/landingPage/LandingPage";
import Login from "../../pages/login/Login";
import './Navbar.css'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/book",
        element: <Book />,
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },

]);

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/login`}>Login</Link>
                    </li>
                    <li>
                        <Link to={`/book`}>Book</Link>
                    </li>
                    <li>
                        <Link to={`/aboutus`}>About Us</Link>
                    </li>
                </ul>
            </nav>
            <RouterProvider router={router} />
        </>
    )
}