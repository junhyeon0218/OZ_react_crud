import React from "react";
import "../styles/ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = (props) => {
  console.log(props.expense);
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{props.expense.name}</span>
        <span className='amount'>{props.expense.amount}</span>
      </div>
      <div>
        <button className='edit'>
          <MdEdit />
        </button>
        <button className='clear'>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
