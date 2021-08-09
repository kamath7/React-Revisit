import React, { Component } from "react";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
export default class ClassUsers extends Component {
    constructor(){
        this.state = {
            showUsers: false
        }
    }

  toggleUsersHandler() {}
  render() {
    return (
      <div className={classes.users}>
        <button onClick={toggleUsersHandler}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}
