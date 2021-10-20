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
  const removeHandler = (todoId:string)=>{
    setTodos((prevState)=>{
      return prevState.filter((todo)=> todo.id === todoId)
    })
  }
  return (
    <div>
      <NewTodo onAddToDo={addTodos} />
      <Todos items={todos} onTodoRemove={removeHandler} />
    </div>
  );
}

export default App;
