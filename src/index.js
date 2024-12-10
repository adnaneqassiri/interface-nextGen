import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Login from "./login";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared layout with Nav and Footer
    children: [
      {
        path: "/", // Home page
        element: <App />,
      },
      {
        path: "/login", // Login page
        element: <Login />,
      },
    ],
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
