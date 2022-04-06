import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function ProductPartial({productsData}) {
    const { push } = useHistory();

  const handleClickDetail = (e) => {
    const { id } = e.target;
    push({
      pathname: "/productDetail",
      search: `?product=${id}`,
      // state: { id: id }
    });
  };

  return (
    <>
      {productsData && productsData?.map(({ id, name, price, category, image, color }) => (
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
    </>
  );
}

export default ProductPartial;
