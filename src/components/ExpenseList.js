import React from "react";
import "../styles/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  console.log(props); // initialExpenses 배열 그 자체를 객체로 가져옴
  console.log(props.initialExpenses); // initialExpenses 배열을 가져옴
  console.log(props.initialExpenses[0]);
  return (
    <>
      <ul className='list'>
        {props.initialExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>

      <button className='btn'>지우기</button>
    </>
  );
};

export default ExpenseList;
