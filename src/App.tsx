import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BingoCard from "./BingoCard";
function App() {
  return (
    <div className="App">
      <div className="bingo-container">
        {[...Array(55)].map((x) => (
          <div className="bingo-pair">
            <BingoCard />
            <BingoCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
