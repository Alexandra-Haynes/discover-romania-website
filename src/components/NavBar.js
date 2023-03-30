import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import "./NavBarStyles.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar-container">
        <a className="logo-container" href="/">
          <img src="assets/logo.png" alt="logo" />
          <h1 className="navbar-logo"> Discover Romania</h1>
        </a>

        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.tag}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-icon-mobile">
          <i
            onClick={handleClick}
            className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
