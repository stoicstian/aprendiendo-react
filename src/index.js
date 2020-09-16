import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./components/Clock";
// import Button from "./components/Button";
import LoginControl from "./components/LoginControl";
import Calculator from "./components/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root"),
//   console.log("Estoy en index.html")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Clock intervalo={1} />
//     <Clock intervalo={3} />
//     <Clock intervalo={7} />
//     <Clock intervalo={11} />
//   </React.StrictMode>,
//   document.getElementById("personal")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <LoginControl />
//   </React.StrictMode>,
//   document.getElementById("button")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
