import React from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos: Todo[] = [new Todo("Eat food"), new Todo("Take a dump"), new Todo("Sleep")]
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
