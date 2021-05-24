import "./ExpenseDate.css";
function ExpenseDate({ expense }) {
  const month = expense.date.toLocaleDateString("en-IN", { month: "long" });
  const day = expense.date.toLocaleDateString("en-IN", { day: "2-digit" });
  const year = expense.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expene-date__month">{month}</div>
      <div className="expene-date__year">{year}</div>
      <div className="expene-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
