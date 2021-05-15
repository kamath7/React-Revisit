import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseItemList.css';
const ExpenseItemList = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseItemList;
