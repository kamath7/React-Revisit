import React from "react";
import Todo from "../models/todo";
import IndTodo from "./IndTodo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //<{}> makes sure items prop is passed
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <IndTodo text={item.text} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
