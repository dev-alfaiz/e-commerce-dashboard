import * as React from "react";

export const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  const handleAddProduct = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let response = await fetch("http://localhost:5050/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    console.log("ADD PRODUCT:", response);
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <div className="form-fields-wrapper">
        <input
          className="input-box"
          type={"text"}
          placeholder={"Enter Product Name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input-box"
          type={"number"}
          placeholder={"Enter Product Price"}
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <select
          className="input-box-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Category</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Mobile"}>Mobile</option>
          <option value={"Utensils"}>Utensils</option>
        </select>
        <select
          className="input-box-select"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        >
          <option>Company</option>
          <option value={"Samsung"}>Samsung</option>
          <option value={"Vivo"}>Vivo</option>
          <option value={"LG"}>LG</option>
          <option value={"Tupperware"}>Tupperware</option>
        </select>
        <button
          className="login-button"
          type="button"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};
