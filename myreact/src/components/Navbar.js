import React, { Component } from "react";
import Logo from "../assets/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {" "}
        <div className="leftSide">
          <img src={Logo} />
        </div>
        <div className="rightSide"></div>
      </div>
    );
  }
}
