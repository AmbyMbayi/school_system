import React, { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.navbar_nav}>
          <li className={styles.nav_item}>
            <a href="" className={styles.nav_link}>
              heading ndhh one
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
