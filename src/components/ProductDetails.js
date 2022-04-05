import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

function ProductDetails() {
  const [products, setProducts] = useState();
  const {push} = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const productId = params.get("product");

  const getData = useCallback(() => {
    axios
      .get(
        `https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1/products/${productId}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [productId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const deleteData = useCallback(() => {
    productService.deleteProducts(productId).then(() => {
      push({
        pathname: "/products",
        search: "",
        state: true,
      });
    });
  }, [productId,push]);

  const deleteProduct = () => {
    deleteData();
  };

  return (
    <div className="container">
      <Banner title={"Product detail"}/>
      <div className="mt-5 mb-5 row justify-content-center">
        <Card key={products?.id}>
          <CardImg
            alt="Card cap"
            src={products?.image}
            top
            width="100%"
            height={"500px"}
          />
          <CardBody>
            <CardTitle tag="h5">{products?.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: {products?.price}
            </CardSubtitle>
            <CardText>Category: {products?.category}</CardText>
          </CardBody>
        </Card>
        <Button style={{ color: "red" }} onClick={deleteProduct}>Delete</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
