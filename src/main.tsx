import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

const paths = [{ path: "/", element: <Home /> }];

const router = createBrowserRouter(paths);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
