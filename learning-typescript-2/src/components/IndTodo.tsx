import React from "react";
import classes from "./IndTodo.module.css";

const IndTodo: React.FC<{ text: string; key: string, onTodoRemove: ()=> void }> = (props) => {
  return (
    <li className={classes.item} key={props.key} onClick={props.onTodoRemove}>
      {props.text}
    </li>
  );
};

export default IndTodo;
