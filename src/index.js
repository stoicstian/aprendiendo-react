import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Personal from "./components/Example";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <Personal name="Sebastián" />
  </React.StrictMode>,
  document.getElementById("personal")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
