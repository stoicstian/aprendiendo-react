import React, { Component } from "react";
import tareasDatos from "./example/tasks.json";
import ListaTareas from "./components/ListaTareas";
import Formulario from "./components/FormularioTareas";
import "./App.css";

class App extends Component {
  state = {
    tareasStateApp: tareasDatos,
  };

  render() {
    return (
      <div>
        <Formulario />
        <ListaTareas propiedadTareas={this.state.tareasStateApp} />
      </div>
    );
  }
}

export default App;
