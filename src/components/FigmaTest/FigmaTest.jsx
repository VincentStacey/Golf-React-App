import React, { useEffect, useState } from "react";
import "./FigmaTest.css";
import { useProducts } from "../../Context/ProductContext";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import Button from "../Button/Button";

const FigmaTest = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useShoppingCart();
  const [randomClubs, setRandomClubs] = useState([]);
  const [reviewNumbers, setReviewNumbers] = useState([]);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [hoveredClubId, setHoveredClubId] = useState(null);

  useEffect(() => {
    if (products.length) {
      const getRandomClubs = () => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      };

      const clubs = getRandomClubs();
      setRandomClubs(clubs);

      const reviews = clubs.map(
        () => Math.floor(Math.random() * (139 - 69 + 1)) + 69
      );
      setReviewNumbers(reviews);
    }
  }, [products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleEnlargeClick = (image) => {
    console.log("Enlarge Clicked:", image);
    setEnlargedImage(image);
    setIsEnlarged(true);
  };

  const handleCloseClick = () => {
    console.log("Close Clicked");
    setIsEnlarged(false);
    setEnlargedImage(null);
  };

  const handleAddToCartWithDiscount = (product) => {
    const discountedProduct = {
      ...product,
      price: parseFloat((product.price * 0.75).toFixed(2)),
    };
    addToCart(discountedProduct, product.stockQuantity);
  };

  return (
    <div className="clubsSection">
      <div className="clubsWrapper">
        <div className="golf-container">
          {randomClubs.map((product, index) => {
            const discountedPrice = (product.price * 0.75).toFixed(2);
            const reviewNumber = reviewNumbers[index] || 0;

            return (
              <div
                className="cart-with-flat-discount"
                key={product.id}
                onMouseEnter={() => setHoveredClubId(product.id)}
                onMouseLeave={() => setHoveredClubId(null)}
              >
                <div className="frame-570">
                  <div className="frame-575">
                    <div className="fill-eye">
                      <div className="ellipse-13"></div>
                      <div className="quick-view">
                        <div
                          onClick={() => handleEnlargeClick(product.coverImage)}
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-614">
                    <img
                      className="centered-image"
                      src={product.coverImage}
                      alt={product.title}
                    />
                    {hoveredClubId === product.id && (
                      <Button
                        text="Add to Cart"
                        className="add-to-cart-button-home"
                        onClick={() => handleAddToCartWithDiscount(product)}
                      />
                    )}
                  </div>
                </div>
                <div className="frame-569">
                  <div className="brand-name">{product.brand}</div>
                  <div className="s-series-comfort-chair">{product.title}</div>
                  <div className="frame-567">
                    <div className="_375">${discountedPrice}</div>
                    <div className="_400">${product.price}</div>
                  </div>
                  <div className="frame-566">
                    <div className="stars">
                    </div>
                    <div className="_99">({reviewNumber})</div>
                  </div>
                </div>
              </div>
            );
          })}
          {isEnlarged && (
            <div className="overlay" onClick={handleCloseClick}>
              <div className="enlarged-image-container">
                <img
                  className="enlarged-image"
                  src={enlargedImage}
                  alt="Enlarged"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FigmaTest;