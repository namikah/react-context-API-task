import React, { useMemo } from "react";
import { useProductContext } from "../../context/Products";
import Banner from "../../components/layouts/banner/Banner";
import ProductPartial from "../../components/partials/ProductPartial";
import OurTeam from "../ourTeam/OurTeam";
import Index from "../myOffer/Index";

function Home() {
  const [{ productsData }] = useProductContext([]);

  const getProductsForHome = useMemo(
    () => productsData.slice(0, 4),
    [productsData]
  );

  return (
    <div className="">
      <Banner title={"Home"} />
      <ProductPartial productsData={getProductsForHome} />
      <OurTeam />
      <Index />
    </div>
  );
}

export default Home;
