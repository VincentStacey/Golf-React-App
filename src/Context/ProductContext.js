import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [brands, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/clubs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const products = data; //Products needs to be set to data, that is the array coming back from db.json.

      setProducts(products);
      setBrand([...new Set(products.map((product) => product.brand))]);
      setCategory([...new Set(products.map((product) => product.category))]);
      setPrice([...new Set(products.map((product) => product.price))]);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const refreshProducts = () => {
    fetchProducts();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        brands,
        category,
        price,
        refreshProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
