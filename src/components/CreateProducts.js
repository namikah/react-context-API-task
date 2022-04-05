import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { productService } from "../API/services/productService";

const product = {
  name: "",
  price: "",
  category: "",
  image: "",
  color: "",
};

function CreateProducts() {
  const [products, setProducts] = useState(product);
  const { push } = useHistory();

  const postData = useCallback(() => {
    productService.postProducts(products).then(() => {
      push({
        pathname: "/products",
        search: "",
        state: true,
      });
    });
  }, [products, push]);

  const createProduct = () => {
    postData();
  };

  const getElementValues = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  return (
    <div className="container col-3 mt-5">
      <Form inline>
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
          />
        </FormGroup>
        <Button onClick={createProduct} className="mt-4">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateProducts;
