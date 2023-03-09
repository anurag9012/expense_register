import "./Expensetracker.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function Expensetracker(props) {
  // let clickhandler=()=>{console.log("clicked!!")}
  return (<li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
      {/* <button onClick={clickhandler}>clickme</button> */}
    </Card></li>
  );
}
export default Expensetracker;
