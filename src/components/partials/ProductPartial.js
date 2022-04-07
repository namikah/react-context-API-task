import React from "react";
import "./productPartial.css";
import { useHistory } from "react-router-dom";
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
import { useLoadingContext } from "../../context/loading";

function ProductPartial({ productsData }) {
  const { push } = useHistory();
  const [{ loading }] = useLoadingContext([]);

  const handleClickDetail = (e) => {
    const { id } = e.target;
    push({
      pathname: "/productDetail",
      search: `?product=${id}`,
      // state: { id: id }
    });
  };

  return (
    <div className="container">
      <div className="products-title">
        <h4 className="title">PRODUCTS</h4>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Spinner className="loading"></Spinner>
        ) : (
          productsData &&
          productsData?.map(({ id, name, price, category, image, color }) => (
            <div className="col-3 mb-4">
              <Card key={id} className="p-1">
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductPartial;
