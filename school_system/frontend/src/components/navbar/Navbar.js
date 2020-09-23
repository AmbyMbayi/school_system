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
        <ul className={`${styles.navbar_nav} ${styles.nav_right}`}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link}>
              <i className="fa fa-moon-o"></i>
            </a>
          </li>
          <li className={`${styles.nav_item} ${styles.dropdown}`}>
            <a className={styles.nav_link}>
              <i className="fa fa-bell"></i>
              <span className={styles.navbar_badge}>15</span>
            </a>
            <ul
              className={`${styles.dropdown_menu} ${styles.notification_menu}`}
            >
              <div className={styles.dropdown_menu_header}>
                <span>Notification</span>
              </div>
              <div
                className={`${styles.dropdown_menu_content} ${styles.overlay_scrollbar} ${styles.scrollbar_hover}`}
              >
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>
                    <div>
                      <i className="fa fa-gift"></i>
                    </div>
                    <span>
                      Lorem Lepsam
                      <br />
                      <span>15/4/2020</span>
                    </span>
                  </a>
                </li>
              </div>
              <div className={styles.dropdown_menu_footer}>
                <span>View All Notification</span>
              </div>
            </ul>
          </li>
          <li className={`${styles.nav_item} ${styles.avt_wrapper}`}>
            <div className={`${styles.avt} ${styles.dropdown}`}>
              <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
              <ul className={styles.dropdown_menu}>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>
                    <div>
                      <i className="fa fa-cog"></i>
                    </div>
                    <span>Profile</span>
                  </a>
                </li>
                <li className={styles.dropdown_menu_item}>
                  <a href="" className={styles.dropdown_menu_link}>
                    <div>
                      <i className="fa fa-cog"></i>
                    </div>
                    <span>Profile</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
