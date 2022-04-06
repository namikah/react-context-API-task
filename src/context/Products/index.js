import React, { createContext, useContext, useState } from "react";
import { productService } from "../../API/services/productService";

const ProductContext = createContext([]);

function ProductsProvider({ children }) {
  const [productsData, setProductsData] = useState([]);

  React.useEffect(() => {
    productService.getProducts().then(({ data }) => {
      setProductsData(data);
    });
  }, []);
  return (
    <ProductContext.Provider value={[{ productsData, setProductsData }]}>
      {children}
    </ProductContext.Provider>
  );
}

const useProductContext = () => {
  const productContext = useContext(ProductContext);
  return productContext;
};

export { useProductContext, ProductsProvider };
