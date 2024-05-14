import React from "react";
import "../styles/ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete }) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{expense.name}</span>
        <span className='amount'>{expense.amount}</span>
      </div>
      <div>
        <button className='edit'>
          <MdEdit />
        </button>
        <button
          className='clear'
          onClick={() => {
            console.log(`delete ${expense.name}`);
            handleDelete(expense.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
