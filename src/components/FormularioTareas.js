import React, { Component } from "react";

class FormularioTareas extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (event) => {
    this.props.agregarTarea(this.state.title, this.state.description);
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Escribe un tarea"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <textarea
          cols="30"
          rows="10"
          name="description"
          onChange={this.onChange}
          value={this.state.description}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default FormularioTareas;
