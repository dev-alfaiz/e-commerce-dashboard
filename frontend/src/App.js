import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar, Footer, PrivateComponent } from "./components";
import {
  AddProduct,
  Login,
  Products,
  Signup,
  UpdateProduct,
  Profile,
} from "./screens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route exact path={"/"} element={<Products />} key={"products"} />
          <Route
            exact
            path={"/products"}
            element={<Products />}
            key={"products"}
          />
          <Route
            exact
            path={"/add"}
            element={<AddProduct />}
            key={"add-product"}
          />
          <Route
            exact
            path={"/update/:id"}
            element={<UpdateProduct />}
            key={"update-product"}
          />
          <Route
            exact
            path={"/profile"}
            element={<Profile />}
            key={"profile"}
          />
        </Route>
        <Route exact path={"/login"} element={<Login />} key={"login"} />
        <Route exact path={"/signup"} element={<Signup />} key={"profile"} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
