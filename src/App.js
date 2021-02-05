import React from "react";
import ReactDOM from "react-dom";
import "App.css";
import thumb from "./demo.jpg";

const App = () => (
  <div>
    <h1>Hello React</h1>
    <img src={thumb} alt="demo" />
  </div>
);

export default App;
