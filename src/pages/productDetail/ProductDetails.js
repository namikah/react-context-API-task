import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Spinner,
} from "reactstrap";
import { productService } from "../../API/services/productService";
import Banner from "../../components/layouts/banner/Banner";
import { useLoadingContext } from "../../context/loading";
import { useProductContext } from "../../context/Products";

function ProductDetails() {
  const [products, setProducts] = useState();
  const [{ setProductsData }] = useProductContext([]);
  const [{ loading, setLoading }] = useLoadingContext([]);
  const { push } = useHistory();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const productId = params.get("product");

  const getData = useCallback(() => {
    setLoading(true);
    axios
      .get(
        `https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1/products/${productId}`
      )
      .then(({ data }) => {
        setProducts(data);
        setLoading(false)
      });
  }, [productId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getAllProducts = useCallback(() => {
    productService.getProducts().then(({ data }) => {
      setProductsData(data);
    });
  }, [setProductsData]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const deleteProduct = useCallback(() => {
    productService.deleteProducts(productId).then(() => {
      getAllProducts();
      push({
        pathname: "/products",
        search: "",
        state: true,
      });
    });
  }, [productId, push, getAllProducts]);

  return (
    <div className="container">
      <Banner title={"Product detail"} />
      {loading ? <Spinner className="loading"></Spinner> : <div className="mt-5 mb-5 row justify-content-center">
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
        <Button onClick={() => {
          push({
            pathname: "/products",
            search: "",
            state: true,
          });
        }}>{"<- view all products ->"}</Button>
      </div>}
    </div>
  );
}

export default ProductDetails;
