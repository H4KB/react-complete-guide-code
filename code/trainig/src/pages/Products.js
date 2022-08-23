import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Products 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Products 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Products 3</Link>
        </li>
        <li>
          <Link to="/products/p4">Products 4</Link>
        </li>
        <li>
          <Link to="/products/p5">Products 5</Link>
        </li>
        <li>
          <Link to="/products/p6">Products 6</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
