import React, { Component } from "react";
import ButtonLogin from "./ButtonLogin";
import ButtonLogout from "./ButtonLogout";

class LoggingControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.ButtonLogin = this.ButtonLogin.bind(this);
    // this.ButtonLogout = this.ButtonLogout.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLogout onClick={this.handleLogoutClick} />;
    } else {
      button = <ButtonLogin onClick={this.handleLoginClick} />;
    }

    return <div>{button}</div>;
  }
}

export default LoggingControl;
