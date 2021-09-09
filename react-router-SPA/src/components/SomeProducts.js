import React from "react";
import { Link } from "react-router-dom";

const SomeProducts = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li> <Link to="/products/p1">Bazooka</Link></li>
        <li> <Link to="/products/p2">PS4</Link></li>
        <li> <Link to="/products/p3">Wolfenstein 3D</Link></li>
      </ul>
    </section>
  );
};

export default SomeProducts;
