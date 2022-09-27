import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProvider from "./App";
import Board from "./components/Board";
import Popup from "./components/Popup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Board />
      <Popup />
    </AppProvider>
  </React.StrictMode>
);
