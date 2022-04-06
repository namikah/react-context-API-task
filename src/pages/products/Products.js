import React from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { useProductContext } from "../../context/Products";
import Banner from "../../components/layouts/banner/Banner";
import ProductPartial from "../../components/ProductPartial";

function Products() {
  const { state } = useLocation();
  const [{ productsData }] = useProductContext([]);
  const [{ loading }] = useProductContext([]);
  const { push } = useHistory();

  if (!state) return <Redirect to={"/login"} />;
  return (
    <div className="container">
      <Banner title={"Products"} />
      <div className="mt-5 mb-5 row justify-content-center">
        <Button onClick={() => push("/createProducts")} className="mb-2">
          Create
        </Button>
        <ProductPartial productsData={productsData} />
      </div>
    </div>
  );
}

export default Products;
