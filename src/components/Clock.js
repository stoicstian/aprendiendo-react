import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // console.log("Estoy en el constructor");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.props.intervalo * 1000);
    // console.log(this.timerID + "HOLA");
    // console.log("Montando Clock");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    // console.log("Desmontando Clock");
  }

  tick() {
    this.setState({ date: new Date() });
    // console.log("Estoy en tick()");
  }

  render() {
    // console.log(this.props);
    // console.log("Renderizado");

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
