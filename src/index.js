import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import "tachyons";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
