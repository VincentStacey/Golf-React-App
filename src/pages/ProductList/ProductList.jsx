import React, { useState } from "react";
import { useProducts } from "../../Context/ProductContext";
import { useShoppingCart } from "../../Context/ShoppingCartProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import QuickViewModel from "../../components/Model/QuickViewModel";
import Paging from "../../components/Paging/Paging";
import "./ProductList.css";

const ProductList = () => {
  const { addToCart } = useShoppingCart();
  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const navigate = useNavigate();

  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const paging = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenProduct = (id) => {
    navigate(`/clubs/${id}==`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  return (
    <div className="main-content product-layout">
      <div className="top-of-product">
        <div className="product-list-container">
          {getCurrentProducts().map((product) => (
            <div
              className="product-container"
              key={product.id}
              onClick={() => handleOpenProduct(product.id)}
            >
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-image-container">
                  <img src={product.coverImage} alt={product.name} />
                  <Button
                    text="Quick View"
                    onClick={(e) => handleQuickView(e, product)}
                    variant="quick-view-button"
                    className="quick-view-button"
                  />
                </div>
                <div className="title-and-brand">
                  <span>
                    <strong>{product.title}</strong>
                  </span>
                  <span>{product.brand}</span>
                </div>
                <div className="cost-and-button">
                  <span className="club-price">${product.price}</span>
                  <Button
                    text="Add to Cart"
                    onClick={(e) => handleAddToCart(e, product)}
                    variant="add-to-cart"
                    className="add-to-cart-button"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-div">
        <Paging
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paging={paging}
          currentPage={currentPage}
        />
      </div>

      {selectedProduct && (
        <QuickViewModel
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product) => {
            addToCart(product);
            setSelectedProduct(null);
          }}
          openProduct={() => handleOpenProduct(selectedProduct.id)}
        />
      )}
    </div>
  );
};
export default ProductList;
