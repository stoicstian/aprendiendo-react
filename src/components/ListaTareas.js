import React, { Component } from "react";
import Tarea from "./Tarea";

class ListaTareas extends Component {
  render() {
    return this.props.propiedadTareas.map((objetoListaTareasProps) => (
      <Tarea
        propiedadTarea={objetoListaTareasProps}
        key={objetoListaTareasProps.id}
      />
    ));
  }
}

export default ListaTareas;
