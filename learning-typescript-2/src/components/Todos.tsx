import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => { //<{}> makes sure items prop is passed
  return (
    <div>
      <ul>
        {props.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
