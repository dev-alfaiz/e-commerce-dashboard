import * as React from "react";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!name || !price || !category || !company) {
      setIsError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let payloadData = {
      name: name.toLowerCase(),
      price: price.toLowerCase(),
      category: category.toLowerCase(),
      company: company.toLowerCase(),
      userId: userId,
    };
    let response = await fetch("http://localhost:5050/add-product", {
      method: "POST",
      body: JSON.stringify(payloadData),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    response = await response.json();
    if (response) {
      alert("Product Added Successfully!");
      setName("");
      setPrice(0);
      setCategory("");
      setCompany("");
      setIsError(false);
      navigate("/");
    }
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
        {isError && !name && (
          <span className="error-span">Enter Valid Name</span>
        )}

        <input
          className="input-box"
          type={"number"}
          placeholder={"Enter Product Price"}
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        {isError && !price && (
          <span className="error-span">Enter Valid Price</span>
        )}

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
        {isError && !category && (
          <span className="error-span">Select Valid Category</span>
        )}

        <select
          className="input-box-select"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        >
          <option>Company</option>
          <option value={"Samsung"}>Samsung</option>
          <option value={"Vivo"}>Vivo</option>
          <option value={"Realme"}>Realme</option>
          <option value={"Poco"}>Poco</option>
          <option value={"LG"}>LG</option>
          <option value={"Tupperware"}>Tupperware</option>
        </select>
        {isError && !company && (
          <span className="error-span">Select Valid Company</span>
        )}

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
