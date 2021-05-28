import React , {useState} from 'react';
import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

import "./App.css";
  
const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses,setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=> ([expense,...prevExpenses]))
  }
  console.log(expenses)
  return (
    <div className="App">
      {/* {expenses.map((expense)=><li>{JSON.stringify(expense)}</li>)} */}
      {expenses.map((expense)=>{
        if (expense.date.getFullYear().toString() === '2020'){
          console.log(expense)
        }
        return -1 
      })}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItemList expenses={expenses}/>
    </div>
  );
}

export default App;
