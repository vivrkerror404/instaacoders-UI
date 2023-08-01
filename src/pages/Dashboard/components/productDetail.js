import React, { useCallback, useState } from "react";
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import { AiTwotoneHeart } from "react-icons/ai";
import "../styles/prodDetail.css";
import ExtraImages from "./extraImages";

const ProductDetail = ({
  product: { description, image, name, extra_images, price, isWishList, id },
  setCart,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = useCallback(() => {
    setShowFullDescription((prev) => !prev);
  }, []);

  const updateCart = useCallback(
    (e) => {
      const prodId = e.target.getAttribute("btnid");
      setCart((prev) => ({ ...prev, [prodId]: true }));
    },
    [setCart]
  );

  return (
    <Row className="m-0 p-0">
      <Col xs={3} />
      <Col
        xs={8}
        md={3}
        // offset={{ xs: 3 }}
        className="prod-details"
      >
        <Card.Img
          src={image}
          alt={`Extra Image`}
          className="img-fluid"
          style={{ height: "250px" }}
        />
        {extra_images && extra_images.length > 0 && (
          <ExtraImages images={extra_images} />
        )}
        <h4 className="py-3">{name}</h4>
        {showFullDescription ? (
          <span>{description}</span>
        ) : (
          <span>
            {description.length > 100
              ? `${description.substring(0, 100)}.....`
              : description}
          </span>
        )}
        {description.length > 100 && (
          <a href="#" onClick={toggleDescription} className="ms-3">
            {showFullDescription ? "Show Less" : "Show More"}
          </a>
        )}
        <Tabs
          defaultActiveKey="Details"
          className="m-0 p-0 mt-3"
          onSelect={(data) => console.log("data is ", data)}
        >
          <Tab eventKey={"Details"} title="Details">
            <Row className="m-0 mt-3">
              <Col xs={6}>120cm</Col>
              <Col xs={6}>Animal Save</Col>
            </Row>
          </Tab>
          <Tab eventKey={"Reviews"} title="Reviews">
            <Row className="m-0 mt-3">
              <Col xs={3}>
                <AiTwotoneHeart
                  size="30px"
                  color={isWishList ? "pink" : "black"}
                />
              </Col>
              <Col xs={9}>
                <Button
                  variant="success"
                  btnId={id}
                  className="px-md-3 px-sm-2"
                  onClick={updateCart}
                >
                  ${price} - Add To Cart
                </Button>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProductDetail;
