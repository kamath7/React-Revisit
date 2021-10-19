import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => { //<{}> makes sure items prop is passed
  return (
    <div>
      <ul>
        {props.items.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
