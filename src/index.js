import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Features from './pages/Features '
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry Page Not Found....</h1>,
  },
  {
    path: "/Features",
    element: <Features />,

  },
  {
    path: "/Pricing",
    element: <Pricing />,

  },
  {
    path: "/Resources",
    element: <Resources />,

  },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
