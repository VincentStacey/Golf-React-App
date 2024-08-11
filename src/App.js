import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductList from './pages/ProductList/ProductList';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import './index.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<ProductList />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/checkout" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;







