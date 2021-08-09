import React, { Component } from "react";
import UsersContext from "../users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export default class ClassUserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: this.context.users,
      searchTerm: "",
    };
  }
  componentWillUnmount() {
    console.log("Ciao Amigo!");
  }
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
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
        <UsersContext.Consumer>
          <div className={classes.finder}>
            <input type="search" onChange={this.searchHandler.bind(this)} />
          </div>

          <Users users={this.state.filteredUsers} />
        </UsersContext.Consumer>
      </React.Fragment>
    );
  }
}
