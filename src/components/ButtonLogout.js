import React, { Component } from "react";

class ButtonLogout extends Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>;
  }
}

export default ButtonLogout;
