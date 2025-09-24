import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import "./Product.css";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card mb-5">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>Price: {product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
