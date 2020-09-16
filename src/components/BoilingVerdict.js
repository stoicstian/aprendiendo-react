import React from "react";
import { Component } from "react";

class BoilingVerdict extends Component {
  constructor(props) {
    super();
    this.state = { propiedades: props };
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>The water will boil</p>;
    }
    return <p>The water won't boil</p>;
  }
}

export default BoilingVerdict;
