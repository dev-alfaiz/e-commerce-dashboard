import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const authDetail = JSON.parse(auth);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      {auth ? (
        <ul className="navbar-ul">
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/add"}>Add Product</Link>
          </li>
          {/* <li>
            <Link to={"/update"}>Update Product</Link>
          </li> */}
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to={"/signup"}>
              Logout ({authDetail.name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar-ul navbar-right">
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
