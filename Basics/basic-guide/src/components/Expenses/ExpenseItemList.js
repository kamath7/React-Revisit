import React , {useState}from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import './ExpenseItemList.css';
import ExpensesFilter from "./ExpensesFilter";
const ExpenseItemList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear=>{
    setFilteredYear(selectedYear)
    console.log(`Output from here. ${selectedYear}`)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map((expense,i) => (
        <ExpenseItem key={i} expense={expense} />
      ))}
    </Card>
  );
};

export default ExpenseItemList;
