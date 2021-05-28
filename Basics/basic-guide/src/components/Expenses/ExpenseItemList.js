import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import ExpensesFilter from "./ExpensesFilter";
const ExpenseItemList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Output from here. ${selectedYear}`);
  };
  const filterExpenses = props.expenses.filter((expense)=> expense.date.getFullYear().toString() === filteredYear)
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filterExpenses.length === 0 && <h1>No expenses to show</h1>}
      {props.expenses
        .filter(
          (expense, i) => expense.date.getFullYear().toString() === filteredYear
        )
        .map((expense, i) => (
          <ExpenseItem key={i} expense={expense} />
        ))}
      {/* {props.expenses.map((expense, i) => {
        if (expense.date.getFullYear().toString() === filteredYear) {
          return <ExpenseItem key={i} expense={expense} />;
        }
      })} */}
    </div>
  );
};

export default ExpenseItemList;
