import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRatting from "./StarRatting";

function Test() {
  const [movie, setMovie] = useState(0);
  return (
    <div>
      <StarRatting color="Green" maxRating={10} onsetRating={setMovie} />
      <p>this movie was rated {movie} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRatting maxRating={5} />
    <StarRatting DefaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
