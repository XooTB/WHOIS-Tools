import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "tachyons";
import "./styles/index.css";
import App from "./containers/App";
import { WhoisProvider } from "./contexts/whoisContext";
import { IpProvider } from "./contexts/ipContext";
import { ClientIpProvider } from "./contexts/clientIpContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WhoisProvider>
      <IpProvider>
        <ClientIpProvider>
          <App />
        </ClientIpProvider>
      </IpProvider>
    </WhoisProvider>
  </BrowserRouter>
);
