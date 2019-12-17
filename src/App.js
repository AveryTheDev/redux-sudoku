import React from "react";
import Header from "./scenes/Header";
import Puzzle from "./scenes/Puzzle";
import Settings from "./scenes/Settings";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_row">
        <Puzzle />
        <Settings />
      </div>
    </div>
  );
}

export default App;
