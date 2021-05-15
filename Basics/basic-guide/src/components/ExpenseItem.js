import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
function ExpenseItem({expense}) {
    // const expenseDate= new Date(2021,5,13)
    // const expenseTitle = 'Hotel'
    // const expenseAmount = 234.50

  return (
    <div className="expense-item">
      <div><ExpenseDate expense={expense}/></div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
