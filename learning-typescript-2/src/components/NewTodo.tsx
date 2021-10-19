import React, { useRef } from "react";

const NewTodo: React.FC<{onAddToDo: (text:string)=> void}> = (props) => {
  const todoTextInp = useRef<HTMLInputElement>(null); //all dom elements have built in types

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredtxt = todoTextInp.current!.value //mentioning that we are definite of getting a val
    if(enteredtxt.trim().length === 0){
        return;
    }
    props.onAddToDo(enteredtxt)
};
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Enter your Text</label>
      <input type="text" id="text" ref={todoTextInp} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
