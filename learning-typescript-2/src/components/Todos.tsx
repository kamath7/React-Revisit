import React, {useContext} from "react";
import TodosContext from "../store/todos-context";
import Todo from "../models/todo";
import IndTodo from "./IndTodo";
import classes from './Todos.module.css';
const Todos: React.FC = (props) => {
  //<{}> makes sure items prop is passed
  const todosCont =  useContext(TodosContext)

  return (
    <>
      <ul className={classes.todos}>
        {todosCont.items.map((item) => (
          <IndTodo text={item.text} key={item.id} onTodoRemove={todosCont.removeTodo.bind(null, item.id)} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
