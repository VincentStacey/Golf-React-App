import React from "react";
import Button from "../Button/Button";
import { FaX } from "react-icons/fa6";
import "./QuickViewModel.css";
import { useNavigate } from "react-router-dom";

const QuickViewModel = ({ product, onClose, onAddToCart }) => {
  const navigate = useNavigate();
  const handleOpenProduct = (id) => {
    console.log("Opening product details");
    console.log(id);

    navigate(`/products/${id}`);
  };

  return (
    <div className="model-overlay" onClick={onClose}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <FaX className="model-close" onClick={onClose} />
        <div className="model-layout">
          <div className="model-left">
            <img
              src={product.coverImage}
              alt={product.title}
              className="model-image"
            />
          </div>
          <div className="model-right">
            <div className="model-header">
              <h2 className="model-title">{product.title}</h2>
              <h3 className="model-brand">{product.brand}</h3>

              <p className="model-price">${product.price.toFixed(2)}</p>
            </div>
            <div className="model-brand">
              <h4>Brand:</h4>
              <ol>
                {product.category.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ol>
            </div>
            <div className="model-cart-button-div">
              <Button
                text="View Product"
                onClick={() => handleOpenProduct(product.id)}
              />
              <Button
                text="Add to Cart"
                onClick={() => onAddToCart(product)}
                className="model-add-to-cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
