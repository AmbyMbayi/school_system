import React, { Component } from "react";
import styles from "./Sidebar.module.css";
class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <h2>Siden</h2>
      </div>
    );
  }
}

export default Sidebar;
