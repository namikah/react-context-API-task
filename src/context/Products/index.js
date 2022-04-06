import React, { createContext, useContext, useState } from "react";
import { productService } from "../../API/services/productService";

const ProductContext = createContext([]);

function ProductsProvider({ children }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    productService.getProducts().then(({ data }) => {
      setProductsData(data);
      setLoading(false);
    });
  }, []);
  return (
    <ProductContext.Provider
      value={[{ productsData, setProductsData, loading, setLoading }]}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProductContext = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};

export { useProductContext, ProductsProvider };
