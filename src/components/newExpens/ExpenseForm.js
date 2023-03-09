import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  function submithandler(e){e.preventDefault();
    const expensedata={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    
 props.collectdata(expensedata)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  }
  return (
    <form onSubmit={submithandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} 
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.oncancel}>cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/* import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {

    const [titlechangehandler,settitlechangehandler]=useState("")
    
    // function titlechangehandler(e){
            
    //     console.log(e.target.value)
    // }
  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(e)=>settitlechangehandler(e.target.value)} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>

      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      
    </form>
  );
}
export default ExpenseForm;
 */