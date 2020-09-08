import React, { Component } from "react";
import tareasDatos from "./example/tasks.json";
import ListaTareas from "./components/ListaTareas";
import Formulario from "./components/FormularioTareas";
import Example from "./components/Example";
import "./App.css";

class App extends Component {
  state = {
    tareasStateApp: tareasDatos,
  };

  agregarTarea = (title, description) => {
    const nuevaTarea = {
      title: title,
      description: description,
      id: this.state.tareasStateApp.length,
    };
    this.setState({
      tareasStateApp: [...this.state.tareasStateApp, nuevaTarea],
    });
  };

  eliminarTarea = (id) => {
    this.state.tareasStateApp.filter();
  };

  marcarTarea = () => {};

  render() {
    return (
      <div>
        <Formulario agregarTarea={this.agregarTarea} />
        <ListaTareas propiedadTareas={this.state.tareasStateApp} />
      </div>
    );
  }
}

export default App;
