import React, { Component } from "react";
import classes from "./Users.module.css";

export default class ClassUser extends Component {
  render() {
    return (
        <li className={classes.user}>{this.props.name}</li>
    );
  }
}
