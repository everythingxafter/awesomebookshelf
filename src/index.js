import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Book from "./pages/book/Book";
import UpdateBook from "./pages/updateBook/UpdateBook";
import BooksCollection from "./pages/booksCollection/BooksCollection";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import ProtectedRoute from "./component/protectedRoute/protectedRoute";
import CreateBook from "./pages/createBook/CreateBook";
import CategoriesPage from "./pages/sortingPage/categoriesPage";
import SavedPage from "./pages/sortingPage/savedPage";
import SearchPage from "./pages/sortingPage/searchPage";
import LogoutPage from "./pages/logoutPage/LogoutPage";

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
    path: "/book/:id",
    element: <Book />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/createbook",
    element: (
      <ProtectedRoute>
        <CreateBook />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/updatebook/:id",
    element: (
      <ProtectedRoute>
        <UpdateBook />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: (
      <CategoriesPage />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/savedbook",
    element: (
      <SavedPage />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/searchbook",
    element: (
      <SearchPage />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    element: (
      <LogoutPage />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
