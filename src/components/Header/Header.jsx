import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";

const Header = () => {
  const { cartItems } = useShoppingCart();

  const [cartItemsCount, setCartItemsCount] = React.useState(2);
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="sale-popup">
        <p className="sale-popup-text">
         <p>GolfCity.com</p>
        </p>
      </div>
      <div className="title-section">
        <h2 onClick={onTitleClick}>Golf City</h2>
      </div>
      <div className="nav-section">
        <div className="left-side">
          <Button
            text="View All Products"
            variant="nav"
            onClick={() => {
              navigate("/clubs");
            }}
          />
        </div>
        <div className="right-side">
          <Button
            text="Cart"
            count={cartItemsCount}
            onClick={() => {
              navigate("/checkout");
            }}
            variant="cart"
            
          />
        </div>
      </div>
    </header>
  );
};

export default Header;