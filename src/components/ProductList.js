import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  return (
    <>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
        <button
          className="btn btn-info"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info"
              onClick={() => {
                getProductInCategory(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
