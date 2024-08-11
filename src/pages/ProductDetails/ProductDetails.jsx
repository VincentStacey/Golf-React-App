import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Button from "../../components/Button/Button";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { products, error } = useProducts();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useShoppingCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    const findProduct = () => {
      const product = products.find((item) => item.id === id);
      setSelectedProduct(product);
    };

    if (products.length > 0) {
      findProduct();
    }
  }, [products, id]);

  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  const { coverImage, title, brand, price, category} =
    selectedProduct;

  return (
    <div className="main-content product-details">
      <div className="product-details-container">
        <div className="half">
          <div className="product-image-container">
            <img src={coverImage} alt={title} />
          </div>
          <br />
          <h2 className="product-title">{title}</h2>
          <h3 className="product-artist">{brand}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        <div className="half">
          <p className="product-description">{category}</p>
          <br />
          <br />
          <Button
            text="Add to Cart"
            onClick={() => handleAddToCart(selectedProduct)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;