import React, { Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export default class ClassUserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  searchHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchHandler.bind(this)} />
        </div>

        <Users users={this.state.filteredUsers} />
      </React.Fragment>
    );
  }
}
