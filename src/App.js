import React, { Component } from "react";
import tareasDatos from "./example/tasks.json";
import ListaTareas from "./components/ListaTareas";
import Formulario from "./components/FormularioTareas";
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
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));

    return (
      <div>
        <Formulario agregarTarea={this.agregarTarea} />
        <ListaTareas propiedadTareas={this.state.tareasStateApp} />
        <ul>{listItems}</ul>,
      </div>
    );
  }
}

export default App;
