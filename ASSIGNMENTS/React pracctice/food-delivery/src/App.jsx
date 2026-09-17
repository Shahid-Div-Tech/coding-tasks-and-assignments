import React from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddToCart from "./Screens/AddToCart";
import store from "./store/store";
import Home from "./Screens/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addtocart",
    element: <AddToCart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
