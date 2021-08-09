import React, { Component } from "react";
import classes from "./Users.module.css";
import ClassUser from "./ClassUser";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
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
        {DUMMY_USERS.map((user) => (
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
