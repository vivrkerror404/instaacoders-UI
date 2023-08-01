import React, { useCallback, useMemo, useState } from "react";
import { Form, Col, Container, InputGroup, Button } from "react-bootstrap";

import StarRatings from "react-star-ratings";
import { themes } from "common/themes";
import LeafBg from "assets/dark-bg.avif";

import "../styles/index.css";
const CATEGORIES = ["Gardening", "Plants", "Seeds", "Bulbs", "Planters"];
export default function SideFilter({ setFilters }) {
  const [rating, setRating] = useState(3);
  const [price, setPrice] = useState({});
  const handlePriceChange = useCallback((e) => {
    setPrice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const setProductFilter = useCallback(
    (type, value, checked) => {
      setFilters((prev) => {
        const tempPrev = { ...prev };
        if (type === "category") {
          if (checked) {
            if (tempPrev["category"]?.length) tempPrev["category"].push(value);
            else tempPrev["category"] = [value];
          } else {
            tempPrev["category"] = tempPrev["category"].filter(
              (ctgry) => ctgry !== value
            );
          }
        } else {
          Object.assign(tempPrev, price);
        }
        console.log("prev returned value is-- ", tempPrev);
        return tempPrev;
      });
    },
    [price]
  );
  const fetchCategories = useMemo(() => {
    return CATEGORIES.map((category) => {
      return (
        <Form.Check
          type="checkbox"
          id={`check-api-${category}`}
          label={category}
        >
          <Form.Check.Input
            type="checkbox"
            isValid
            onChange={(e) =>
              setProductFilter("category", category, e.target.checked)
            }
          />
          <Form.Check.Label className="text-dark">{category}</Form.Check.Label>
        </Form.Check>
      );
    });
  }, []);
  return (
    <Col
      xs={3}
      style={{ minHeight: "88vh", position: "fixed", left: "0px", top: "80px" }}
    >
      <Container>
        <h5>Filters</h5>
        <b className="mt-4 d-block">Categories</b>
        {fetchCategories}
        <b className="mt-4 d-block">Price range</b>
        <InputGroup className="mb-3">
          {/* <InputGroup.Text id="min">$</InputGroup.Text> */}
          <Form.Control
            placeholder="Min"
            aria-label="Min"
            name="min"
            className="me-3"
            onChange={handlePriceChange}
          />
          {/* <InputGroup.Text id="max">$</InputGroup.Text> */}
          <Form.Control
            placeholder="Max"
            aria-label="Max"
            name="max"
            onChange={handlePriceChange}
          />
        </InputGroup>
        <Button
          variant="success"
          className="px-md-5 px-sm-4"
          onClick={setProductFilter}
        >
          Set Price
        </Button>
        <b className="mt-4 d-block">Rating</b>
        <Col className="d-md-flex flex-row align-items-center">
          <Form.Check type="checkbox" id={`check-api`} className="me-3 mt-2">
            <Form.Check.Input type="checkbox" isValid />
          </Form.Check>
          <StarRatings
            rating={rating}
            starDimension="18px"
            starSpacing="0px"
            starHoverColor={themes.stars}
            starRatedColor={themes.stars}
            changeRating={setRating}
          />
          <span className=" ms-5 mt-2">above</span>
        </Col>

        <Container
          className="text-white rounded text-center py-3 mt-5"
          style={{ backgroundImage: `url(${LeafBg})`, width: "80%" }}
        >
          <h5 className="text-start">Get 30% OFF</h5>
          <p className="text-start">Share your referral code & get discount</p>
          <Button variant="warning" className="px-xl-5 px-md-4">
            Share
          </Button>
        </Container>
      </Container>
    </Col>
  );
}
