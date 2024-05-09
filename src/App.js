import React from "react";
import "./App.css";

const App = () => {
  return (
    <main className='mainContainer'>
      <div className='subContainer'>
        <h1>장바구니</h1>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          빈칸
        </div>
        <div
          className='cart'
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          빈칸
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
