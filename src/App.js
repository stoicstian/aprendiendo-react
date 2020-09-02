import React, { Component } from "react";
import tareasDatos from "./example/tasks.json";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

class App extends Component {
  state = {
    tareasStateApp: tareasDatos,
  };

  render() {
    return <ListaTareas propiedadTareas={this.state.tareasStateApp} />;
  }
}

export default App;
