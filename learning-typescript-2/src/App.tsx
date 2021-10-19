import React, { useState } from "react";
import NewTodo from "./components/NewTodo";

import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodos = (someText: string) => {
    const NewTodo = new Todo(someText);
    setTodos((prevState) => {
      return prevState.concat(NewTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddToDo={addTodos} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
