import * as React from "react";
import { ProductList } from "../../components";

export const Products = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    let response = await fetch("http://localhost:5050/products");
    response = await response.json();
    setProducts(response);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <ProductList list={products} />
    </div>
  );
};
