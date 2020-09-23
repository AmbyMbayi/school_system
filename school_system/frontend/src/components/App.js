import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.module.css";
import AddStudent from "./students/AddStudent";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />

        <Content />
        <AddStudent />
        <h3>color rey</h3>
        <div className="content">
          <h2>cod</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
