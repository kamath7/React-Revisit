import React from "react";
import Todo from "../models/todo";
import IndTodo from "./IndTodo";
import classes from './Todos.module.css';
const Todos: React.FC<{ items: Todo[] ; onTodoRemove: (id: string)=>void }> = (props) => {
  //<{}> makes sure items prop is passed
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <IndTodo text={item.text} key={item.id} onTodoRemove={props.onTodoRemove.bind(null, item.id)} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
