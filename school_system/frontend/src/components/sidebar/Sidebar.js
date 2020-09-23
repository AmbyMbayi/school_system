import React, { Component } from "react";
import styles from "./Sidebar.module.css";
class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <ul className={styles.sidebar_nav}>
          <li className={styles.sidebar_nav_item}>
            <a href="" className={styles.sidebar_nav_link}>
              <div>
                <i className="fa fa-cog"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <li className={styles.sidebar_nav_item}>
            <a href="" className={styles.sidebar_nav_link}>
              <div>
                <i className="fa fa-cog"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
