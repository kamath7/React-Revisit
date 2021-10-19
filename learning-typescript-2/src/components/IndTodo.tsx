import React from "react";
import classes from "./IndTodo.module.css";

const IndTodo: React.FC<{ text: string; key: string }> = (props) => {
  return (
    <li className={classes.item} key={props.key}>
      {props.text}
    </li>
  );
};

export default IndTodo;
