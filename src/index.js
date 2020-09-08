import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./components/Clock";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
  console.log("Estoy en index.html")
);

ReactDOM.render(
  <React.StrictMode>
    <Clock intervalo={1} />
    <Clock intervalo={3} />
    <Clock intervalo={7} />
    <Clock intervalo={11} />
  </React.StrictMode>,
  document.getElementById("personal")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
