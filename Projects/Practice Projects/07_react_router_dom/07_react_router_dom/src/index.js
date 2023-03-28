import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Body from "./Components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // creating app.js as parent
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, //Child 1
      },
      {
        path: "/about",
        element: <About />, // Child 2
      },
      {
        path: "/contact",
        element: <Contact />, //Child 3
      },
      {
        path: "/blog",
        element: <Blog />, //Child 4
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
