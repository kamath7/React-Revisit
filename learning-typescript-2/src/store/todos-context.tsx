import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodos = (someText: string) => {
    const NewTodo = new Todo(someText);
    setTodos((prevState) => {
      return prevState.concat(NewTodo);
    });
  };
  const removeHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id === todoId);
    });
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodos,
    removeTodo: removeHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContext;
