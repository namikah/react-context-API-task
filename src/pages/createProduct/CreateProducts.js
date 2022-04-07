import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { productService } from "../../API/services/productService";
import Banner from "../../components/layouts/banner/Banner";
import { useLoadingContext } from "../../context/loading";
import { useProductContext } from "../../context/Products";

const product = {
  name: "",
  price: "",
  category: "",
  image: "",
  color: "",
};

function CreateProducts() {
  const [products, setProducts] = useState(product);
  const [{ setProductsData }] = useProductContext([]);
  const [{ localLogin, setLocalLogin }] = useLoadingContext([]);
  const { push } = useHistory();


  const getAllProducts = useCallback(() => {
    productService.getProducts().then(({ data }) => {
      setProductsData(data);
    });
  }, [setProductsData]);

  const createProduct = useCallback(
    
    (e) => {
  if(localStorage.getItem("login")===null) setLocalLogin(false)

      if (!localLogin) {
        push({
          pathname: "/login",
          // search: "",
          // state: true,
        });
      } else {
        e.preventDefault();
        productService.postProducts(products).then(() => {
          getAllProducts();
          push({
            pathname: "/products",
            // search: "",
            // state: true,
          });
        });
      }
    },
    [products, push, getAllProducts, localLogin,setLocalLogin]
  );

  const getElementValues = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  return (
    <div className="container">
      <Banner title={"Create products"} />
      <div className="row justify-content-center">
        <Form onSubmit={createProduct} inline className="col-3 ">
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="name"
              type="text"
              onChange={getElementValues}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="price">
              Price
            </Label>
            <Input
              id="price"
              name="price"
              placeholder="price"
              type="text"
              onChange={getElementValues}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="category">
              Category
            </Label>
            <Input
              id="category"
              name="category"
              placeholder="category"
              type="text"
              onChange={getElementValues}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="image">
              Image
            </Label>
            <Input
              id="image"
              name="image"
              placeholder="image"
              type="text"
              onChange={getElementValues}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="color">
              Color
            </Label>
            <Input
              id="color"
              name="color"
              placeholder="color"
              type="text"
              onChange={getElementValues}
              required
            />
          </FormGroup>
          <Button type="submit" className="mt-4">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateProducts;
