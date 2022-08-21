import * as React from "react";

export const ProductList = ({ list }) => {
  return (
    <div className="product-list">
      <h1>Products List</h1>
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>
      {list &&
        list.map((product, index) => {
          return (
            <ul>
              <li>{index + 1}</li>
              <li>{product.name}</li>
              <li>$ {product.price}</li>
              <li>{product.category}</li>
              <li>{product.company}</li>
            </ul>
          );
        })}
    </div>
  );
};
