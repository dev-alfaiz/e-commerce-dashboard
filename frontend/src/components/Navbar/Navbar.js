import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <ul className="navbar-ul">
        {auth ? (
          <React.Fragment key={"private-links"}>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/add"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/update"}>Update Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link onClick={logout} to={"/signup"}>
                Logout
              </Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment key={"non-private-links"}>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};
