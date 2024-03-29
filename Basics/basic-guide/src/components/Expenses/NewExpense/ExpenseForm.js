import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("0");
  //   const [date,setDate] = useState('2020-02-02');
  const [visible, setVisible] = useState(false)
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, title: e.target.value }));
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, amount: e.target.value }));
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => ({ ...prevState, date: e.target.value }));
  };
  const visibleHandler = ()=>{
    setVisible(!visible);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput((prevState) => ({
      title: "",
      amount: "0",
      date: "29, January 2021",
    }));
  };
  return (
    <div>
    {visible ? (   <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-02-02"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      
    </form>): <p>{""}</p>}
    <button onClick={visibleHandler}>{visible? 'Close Form':'Add Expense Form'}</button>
    </div>
 
  );
};

export default ExpenseForm;
