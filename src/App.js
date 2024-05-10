import React from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const initialExpenses = [
    { id: 1, name: "빵", amount: 100 },
    { id: 2, name: "아이스크림", amount: 200 },
    { id: 3, name: "커피", amount: 300 },
    { id: 4, name: "과자", amount: 400 },
    { id: 5, name: "음료수", amount: 500 },
  ];

  return (
    <main className='mainContainer'>
      <div className='subContainer'>
        <h1>장바구니</h1>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm />
        </div>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList initialExpenses={initialExpenses} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}>합계</p>
        </div>
      </div>
    </main>
  );
};

export default App;
