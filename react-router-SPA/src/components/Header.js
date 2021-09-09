import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
