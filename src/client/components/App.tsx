import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import axios from "axios";

function App() {
  const testClick = async () => {
    const { data } = await axios.get("/hello");
    console.log(data);
  };

  return (
    <div className="App">
      <img src="" />
      <button onClick={testClick}>Click me</button>
    </div>
  );
}

export default App;
