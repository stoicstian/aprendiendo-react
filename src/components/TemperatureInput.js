import React, { Component } from "react";

const scaleNames = { c: "Celsius", f: "Fahrenheit" };

class TemperatureInput extends Component {
  constructor(props) {
    super();
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({ temperature: event.target.value });
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Ingrese la temperatura en {scaleNames[scale]}:</legend>
        <input
          type="text"
          value={temperature}
          scale={scale}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
