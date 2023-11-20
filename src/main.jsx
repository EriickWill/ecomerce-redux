import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/index.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from './Pages/Cart/index.jsx';
import Produto from './Pages/Produto/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/carrinho",
    element: <Cart />,
  },
  {
    path: "/produto/:id",
    element: <Produto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
