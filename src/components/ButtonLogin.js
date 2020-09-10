import React, { Component } from "react";

class ButtonLogin extends Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>;
  }
}

export default ButtonLogin;
