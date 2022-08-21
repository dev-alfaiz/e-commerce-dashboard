import * as React from "react";

export const ProductList = ({ list, refreshList }) => {
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
  return (
    <div className="product-list">
      <h1>Products List</h1>
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {list &&
        list.map((product, index) => {
          return (
            <ul key={product._id}>
              <li>{index + 1}</li>
              <li>{product.name}</li>
              <li>$ {product.price}</li>
              <li>{product.category}</li>
              <li>{product.company}</li>
              <li>
                <button
                  className="operation-button"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
    </div>
  );
};
