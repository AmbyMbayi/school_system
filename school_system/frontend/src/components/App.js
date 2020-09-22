import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.module.css";
import AddStudent from "./students/AddStudent";
import Navbar from "./navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>school s manager</h2>
        <AddStudent />
        <h3>color rey</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
