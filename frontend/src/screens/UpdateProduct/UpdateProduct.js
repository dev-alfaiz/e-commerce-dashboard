import * as React from "react";

export const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  const handleUpdateProduct = () => {
    console.log({ name, price, category, company });
  };

  return (
    <div className="update-product">
      <h1>Update Product</h1>
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
          <option value={"Realme"}>Realme</option>
          <option value={"Poco"}>Poco</option>
          <option value={"LG"}>LG</option>
          <option value={"Tupperware"}>Tupperware</option>
        </select>

        <button
          className="login-button"
          type="button"
          onClick={handleUpdateProduct}
        >
          Update Product
        </button>
      </div>
    </div>
  );
};
