import React, { Component } from "react";

class Tarea extends Component {
  StyledCompleted() {
    return {
      fontSize: "17px",
      color: this.props.propiedadTarea.done ? "grey" : "blue",
      textDecoration: this.props.propiedadTarea.done ? "line-through" : "none",
    };
  }

  render() {
    const { id, title, description, done } = this.props.propiedadTarea;

    return (
      <p style={this.StyledCompleted()}>
        {id} -{title} -{description} -{done}
        <input type="checkbox" />
        <button style={buttonDelete}>x</button>
      </p>
    );
  }
}

const buttonDelete = {
  fontSize: "24px",
  color: "white",
  background: "red",
  borderRadius: "50%",
  border: "none",
  padding: "10px 15px",
};

export default Tarea;
