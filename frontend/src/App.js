import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<h1>Products</h1>} key={"products"} />
        <Route
          exact
          path={"/products"}
          element={<h1>Products</h1>}
          key={"products"}
        />
        <Route
          exact
          path={"/add"}
          element={<h1>Add Product</h1>}
          key={"add-product"}
        />
        <Route
          exact
          path={"/update"}
          element={<h1>Update Product</h1>}
          key={"update-product"}
        />
        <Route
          exact
          path={"/logout"}
          element={<h1>Logout</h1>}
          key={"logout"}
        />
        <Route
          exact
          path={"/profile"}
          element={<h1>Profile</h1>}
          key={"profile"}
        />
      </Routes>
    </div>
  );
}

export default App;
