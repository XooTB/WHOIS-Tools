import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "tachyons";
import "./styles/index.css";
import App from "./containers/App";
import { WhoisProvider } from "./contexts/whoisContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WhoisProvider>
      <App />
    </WhoisProvider>
  </BrowserRouter>
);
