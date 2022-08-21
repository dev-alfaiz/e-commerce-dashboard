import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ProductList = ({ list, updateList, refreshList }) => {
  const navigate = useNavigate();
  const deleteProduct = async (id) => {
    let response = await fetch(`http://localhost:5050/product/${id}`, {
      method: "DELETE",
    });
    response = await response.json();
    if (response.acknowledged && response.deletedCount === 1) {
      alert("Record Deleted Successfully!");
      refreshList();
    } else {
      alert(response.result);
    }
  };

  const handleSearch = async (event) => {
    let term = event.target.value;
    term.toLowerCase();
    if (term) {
      let response = await fetch(`http://localhost:5050/search/${term}`);
      response = await response.json();
      updateList(response);
    } else {
      refreshList();
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <input
        type={"text"}
        placeholder={"Search"}
        className={"search-product-input"}
        onChange={handleSearch}
      />
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {list.length > 0 ? (
        list.map((product, index) => {
          return (
            <ul key={product._id}>
              <li>{index + 1}</li>
              <li>{capitalizeFirstLetter(product.name)}</li>
              <li>$ {product.price}</li>
              <li>{capitalizeFirstLetter(product.category)}</li>
              <li>{capitalizeFirstLetter(product.company)}</li>
              <li>
                <button
                  className="operation-button"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
                <Link to={`/update/${product._id}`}>
                  <button className="operation-button">Update</button>
                </Link>
              </li>
            </ul>
          );
        })
      ) : (
        <h1>No Record Found!</h1>
      )}
    </div>
  );
};
