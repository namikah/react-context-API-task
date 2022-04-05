import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { productService } from "../API/services/productService";
import Banner from "./layouts/banner/Banner";

function Products() {
  const { state } = useLocation();
  const [productsData, setProductsData] = useState();
  const { push } = useHistory();

  const getData = useCallback(() => {
    productService.getProducts().then((res) => {
      setProductsData(res.data);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClickDetail = (e) => {
    const { id } = e.target;
    push({
      pathname: "/productDetail",
      search: `?product=${id}`,
      // state: { id: id }
    });
  };

  if (!state) return <Redirect to={"/login"} />;
  return (
    <div className="container">
      <Banner title={"Products"}/>
      <div className="mt-5 mb-5 row justify-content-center">
          <Button onClick={() => push("/createProducts")} className="mb-2">
            Create
          </Button>
        {productsData?.map(({ id, name, price, category, image, color }) => (
          <Card key={id} className="col-3 p-3">
            <CardImg alt="Card cap" src={image} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Price: {price}
              </CardSubtitle>
              <CardText>Category: {category}</CardText>
              <Button
                style={{ backgroundColor: color }}
                id={id}
                onClick={handleClickDetail}
              >
                read more
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
