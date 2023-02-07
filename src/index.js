import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DriverListContext } from "./context/DriverListContext";

ReactDOM.render(
  <React.StrictMode>
    <DriverListContext>
      <App />
    </DriverListContext>
  </React.StrictMode>,
  document.getElementById("root")
);
