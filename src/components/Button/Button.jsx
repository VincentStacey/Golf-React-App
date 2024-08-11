import React from "react";
import { FaRegEye, FaShoppingCart } from "react-icons/fa";
import "./Button.css";

const Button = ({ text, count, onClick, className, variant, isCheckout }) => {
  const buttonClass = `custom-button ${variant || ""} ${className || ""} ${
    !isCheckout ? "radial-button" : ""
  }`;

  const renderButtonContent = () => {
    switch (variant) {
      case "quick-view-button":
        return (
          <>
            <FaRegEye />
            &nbsp;{text}
          </>
        );
      case "cart":
        return (
          <>
            <FaShoppingCart className="cart-icon" />
            {count !== undefined && <span className="item-count">{count}</span>}
          </>
        );
      case "add-to-cart":
        return "Add to Cart";
      default:
        return <>{text}</>;
    }
  };

  return (
    <button className={buttonClass} onClick={onClick}>
      {renderButtonContent()}
    </button>
  );
};

export default Button;