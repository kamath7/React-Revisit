import React from "react";

const IndTodo: React.FC<{ text: string; key: string }> = (props) => {
  return <li key={props.key}>{props.text}</li>;
};

export default IndTodo;
