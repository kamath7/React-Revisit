import React from "react";

const NewTodo: React.FC = () => {
  return (
    <form>
      <label htmlFor="text">Enter your Text</label>
      <input type="text" id="text" />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
