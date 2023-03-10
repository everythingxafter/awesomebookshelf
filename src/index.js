import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Book from "./pages/book/Book";
import BooksCollection from "./pages/booksCollection/BooksCollection";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookscollection",
    element: <BooksCollection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/book",
    element: <Book />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
