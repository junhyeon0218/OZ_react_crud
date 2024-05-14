import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {
  const initialExpenses = [
    { id: 1, name: "빵", amount: 100 },
    { id: 2, name: "아이스크림", amount: 200 },
    { id: 3, name: "커피", amount: 300 },
    { id: 4, name: "과자", amount: 400 },
    { id: 5, name: "음료수", amount: 500 },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [amount, setAmount] = useState(0);
  const [charge, setCharge] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const showAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpenses = [
        ...expenses,
        { id: Date.now(), name: charge, amount },
      ];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
      showAlert({ type: "success", text: "추가되었습니다" });
    } else {
      showAlert({ type: "danger", text: "상품과 비용을 입력해주세요" });
    }
  };

  const handleDeleteAll = () => {
    setExpenses([]);
  };

  return (
    <main className='mainContainer'>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <div className='subContainer'>
        <h1>장바구니</h1>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm
            amount={amount}
            handleAmount={handleAmount}
            charge={charge}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
          />
        </div>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleDeleteAll={handleDeleteAll}
          />
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
