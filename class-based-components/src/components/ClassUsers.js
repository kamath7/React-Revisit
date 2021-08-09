import React, { Component } from "react";
import classes from "./Users.module.css";
import ClassUser from "./ClassUser";

export default class ClassUsers extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    this.setState((currentState) => {
      return {
        showUsers: !currentState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <ClassUser key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
