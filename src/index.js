import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRatting maxRating={5} />
    <StarRatting DefaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
