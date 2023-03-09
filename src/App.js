import NewExpense from "./components/newExpens/NewExpense";
import Expenses from "./components/Expenses";
import { useState } from "react";
import "./App.css";
const dummydata = [
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

const App = () => {
  const [expenses, setexpenses] = useState(dummydata);

  const newdatahandler = (data) => {
    console.log("appse bol raha hun");
    console.log(data);
    // setexpenses([data,...expenses])    METHOD 1
    setexpenses((prevstateofexpenses) => {
      return [data, ...prevstateofexpenses];
    });
  };

  return (
    <div>
    <h3>Expense_Register</h3>
      <NewExpense newdata={newdatahandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
