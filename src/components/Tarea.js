import React, { Component } from "react";

class Tarea extends Component {
  render() {
    const { id, title, description, done } = this.props.propiedadTarea;

    return (
      <p>
        {id}
        {title}
        {description}
        {done}
        <input type="checkbox" />
        <button>x</button>
      </p>
    );
  }
}

export default Tarea;
