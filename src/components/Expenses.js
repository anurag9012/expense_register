import { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
// import Expensetracker from "./ExpenseTracker";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteryeararray = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList item={filteryeararray} />
    </Card>
  );
}
export default Expenses;
