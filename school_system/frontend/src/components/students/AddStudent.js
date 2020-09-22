import React, { Component } from "react";
import styles from "./Student.module.css";

class AddStudent extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.heading}>Add Student Form</h2>
        <form>
          <label>Name</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default AddStudent;
