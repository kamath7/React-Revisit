import React from "react";
import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>24, March 2021</div>
      <div className="expense-item__description">
        <h2>Hotel</h2>
        <div className="expense-item__price">250.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
