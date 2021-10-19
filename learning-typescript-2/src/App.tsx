import React, { useState } from "react";
import NewTodo from "./components/NewTodo";

import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos: Todo[] = [new Todo("Eat food"), new Todo("Take a dump"), new Todo("Sleep")]
  const addTodos = (someText: string)=>{
    
  }
  return (
    <div>
      <NewTodo onAddToDo={}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
