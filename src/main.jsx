import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Projects from "./pages/Projects";
import HorizontalImageScroll from "./components/HorizontalImageScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/scroll",
    element: <HorizontalImageScroll />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);