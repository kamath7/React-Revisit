import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const yearChangedHandler = (e)=>{
        props.onChangeFilter(e.target.value);
        console.log(e.target.value)
    }
    const years = []
    for (let i = new Date().getFullYear() - 3 ; i <= new Date().getFullYear() + 1 ; i++){
      years.push(i)
    }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangedHandler}>
          {years.map((year,i)=> <option key={i} value={year}>{year}</option>)}       
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
