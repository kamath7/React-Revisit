import React from "react";
import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate= new Date(2021,5,13)
    const expenseTitle = 'Hotel'
    const expenseAmount = 234.50
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
