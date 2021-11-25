import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles as TailwindBaseStyles } from "twin.macro";
ReactDOM.render(
  <React.StrictMode>
    <TailwindBaseStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
