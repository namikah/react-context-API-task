import React, { useMemo } from "react";
import { useProductContext } from "../../context/Products";
import Banner from "../../components/layouts/banner/Banner";
import ProductPartial from "../../components/partials/ProductPartial";

function Home() {
  const [{ productsData }] = useProductContext([]);

  const getProductsForHome = useMemo(
    () => productsData.slice(0, 4),
    [productsData]
  );

  return (
    <div className="container">
      <Banner title={"Home"} />
      <div className="row justify-content-center">
        <ProductPartial productsData={getProductsForHome} />
      </div>
    </div>
  );
}

export default Home;
