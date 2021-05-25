import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem({ expense }) {
  // const expenseDate= new Date(2021,5,13)
  // const expenseTitle = 'Hotel'
  // const expenseAmount = 234.50
  const [title, setTitle] = useState(expense.title);
  
  const sayHi = () => {
    setTitle('Changed')
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate expense={expense} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
      <button onClick={sayHi}>Change</button> {/* For state purposes */}
    </Card>
  );
}

export default ExpenseItem;
