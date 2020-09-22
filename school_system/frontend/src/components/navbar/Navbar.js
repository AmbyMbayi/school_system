import React, { Component } from "react";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.navbar_nav}>
          <li className={styles.nav_item}>
            <a href="" className={styles.nav_link}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
        <form className={styles.nav_search}>
          <input
            type="text"
            className={styles.nav_search_input}
            placeholder="what are you looking for..."
          />
          <i className="fa fa-search"></i>
        </form>
      </div>
    );
  }
}
export default Navbar;
