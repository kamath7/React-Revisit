import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todos-context";
const NewTodo: React.FC = () => {
  const todoTextInp = useRef<HTMLInputElement>(null); //all dom elements have built in types
  const ctx = useContext(TodosContext);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredtxt = todoTextInp.current!.value; //mentioning that we are definite of getting a val
    if (enteredtxt.trim().length === 0) {
      return;
    }
    ctx.addTodo(enteredtxt);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Enter your Text</label>
      <input type="text" id="text" ref={todoTextInp} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
