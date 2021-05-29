import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
const ExpenseItemList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Output from here. ${selectedYear}`);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && <h1>No expenses to show</h1>}
      {props.expenses
        .filter(
          (expense, i) => expense.date.getFullYear().toString() === filteredYear
        )
        .map((expense, i) => (
          <ExpenseItem key={i} expense={expense} />
        ))}
    </Card>
  );
};

export default ExpenseItemList;
