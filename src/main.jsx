import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Milk from "./components/Milk";
import AddMilk from "./components/AddMilk";
import UpdateMilk from "./components/UpdateMilk";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Milk></Milk>,
    loader: () => fetch("http://localhost:5000/milk"),
  },
  {
    path: "/add",
    element: <AddMilk></AddMilk>,
  },
  {
    path: "/update/:id",
    element: <UpdateMilk></UpdateMilk>,
    loader: ({ params }) => fetch(`http://localhost:5000/milk/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
