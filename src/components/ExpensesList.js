import "./ExpensesList.css";
import Expensetracker from "./ExpenseTracker";

function ExpensesList(props) {


  if (props.item.length===0){
    return <h2 className="expenses-list__fallback"> FOUND NO ENTRIES!!</h2>;
  }

 
return <ul className="expenses-list">
{props.item.map((item) =>  (
        <Expensetracker
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
</ul>
}
export default ExpensesList;
