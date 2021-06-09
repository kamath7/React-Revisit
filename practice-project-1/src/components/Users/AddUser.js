import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = () => {
  const adduserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={adduserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="kams69" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" placeholder="25" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
