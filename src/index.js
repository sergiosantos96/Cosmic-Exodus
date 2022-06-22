import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="ylbM0DmbUutHXkztybaQUmM7Kohk4KA1genRZM9v"
      serverUrl="https://5orc7uiveh4n.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

reportWebVitals();
