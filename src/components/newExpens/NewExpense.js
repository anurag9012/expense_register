import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const[iseditting,setiseditting]=useState(false)
  function buttonhandler(){
    setiseditting(true)
  }
  function stopediting(){
    setiseditting(false)
  }
  const collectdatahandler = (dataobj) => {
    const incomingdata={...dataobj,id:Math.random().toString()}
    props.newdata(incomingdata);
    setiseditting(false)
  };

  return (
    <div className="new-expense">
   { (!iseditting && <button onClick={buttonhandler}>add new entries</button>) }
    { (iseditting &&  <ExpenseForm collectdata={collectdatahandler} oncancel={stopediting} />)}
    </div>
  );
}
export default NewExpense;
