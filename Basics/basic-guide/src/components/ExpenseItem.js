import React from "react";
import './ExpenseItem.css'
function ExpenseItem({expense}) {
    // const expenseDate= new Date(2021,5,13)
    // const expenseTitle = 'Hotel'
    // const expenseAmount = 234.50
    const month = expense.date.toLocaleDateString('en-IN',{month:'long'})
    const day = expense.date.toLocaleDateString('en-IN',{day:'2-digit'})
    const year = expense.date.getFullYear();
  return (
    <div className="expense-item">
      <div>{day+","+month+" "+year}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
