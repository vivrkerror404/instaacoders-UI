import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { AiTwotoneHeart } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { themes } from "common/themes";

const ProductCard = ({ product, updateCurrentProduct }) => {
  return (
    <Col xs={12} md={6} key={product.name}>
      <Card className="my-3">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          height="180px"
        />
        <Card.Body>
          <Row className="m-0 mt-3">
            <Col xs={8}>
              <Card.Title>{product.name}</Card.Title>
            </Col>
            <Col xs={4} className="text-end p-0">
              <AiTwotoneHeart
                size="30px"
                color={product?.isWishList ? "pink" : "black"}
              />
            </Col>
          </Row>
          <StarRatings
            rating={product.rating}
            starDimension="18px"
            starSpacing="0px"
            starHoverColor={themes.stars}
            starRatedColor={themes.stars}
          />
          <Row className="m-0 p-0 pt-4 w-100">
            <Col md={6} className="text-start p-0">
              <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
            </Col>
            <Col md={6} className="text-end p-0">
              <Button
                variant="outline-success sm"
                data-prod={JSON.stringify(product)}
                onClick={updateCurrentProduct}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ProductCard;
