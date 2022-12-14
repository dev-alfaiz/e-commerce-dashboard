import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  React.useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let response = await fetch(`http://localhost:5050/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    response = await response.json();
    setName(response.name);
    setPrice(response.price);
    setCategory(response.category);
    setCompany(response.company);
  };

  const handleUpdateProduct = async () => {
    let payloadData = {
      name: name.toLowerCase(),
      price: price.toLowerCase(),
      category: category.toLowerCase(),
      company: company.toLowerCase(),
    };
    let response = await fetch(`http://localhost:5050/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(payloadData),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    response = await response.json();

    if (response) {
      alert("Product Updated Successfully!");
      navigate("/");
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="update-product">
      <h1>Update Product</h1>
      <div className="form-fields-wrapper">
        <input
          className="input-box"
          type={"text"}
          placeholder={"Enter Product Name"}
          value={capitalizeFirstLetter(name)}
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
          value={capitalizeFirstLetter(category)}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>Category</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Mobile"}>Mobile</option>
          <option value={"Utensils"}>Utensils</option>
        </select>

        <select
          className="input-box-select"
          value={capitalizeFirstLetter(company)}
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
