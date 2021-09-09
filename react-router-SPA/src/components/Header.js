import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className="header" >
      <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
