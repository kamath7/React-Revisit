import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";


const UsersList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>{`${user.name}    ${user.age} years`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
