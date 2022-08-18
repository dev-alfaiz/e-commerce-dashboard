import * as React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-ul">
        <li>
          <Link to={"/"}>Products</Link>
          <Link to={"/add"}>Add Product</Link>
          <Link to={"/update"}>Update Product</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/signup"}>Signup</Link>
        </li>
      </ul>
    </div>
  );
};
