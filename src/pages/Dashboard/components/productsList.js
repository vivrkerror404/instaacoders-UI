import React, { useCallback, useMemo } from "react";
import { FormControl, InputGroup, Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { PRODUCTS } from "pages/Dashboard/components/products";
import ProductCard from "pages/Dashboard/components/productCard";
import "common/scroll.css";

export default function ProductList({ setCurrentProduct, filters }) {
  const updateCurrentProduct = useCallback(
    (e) => {
      const product = e.target.getAttribute("data-prod");
      setCurrentProduct(JSON.parse(product));
    },
    [setCurrentProduct]
  );

  const fetchProductList = useMemo(() => {
    const { category, min, max } = filters;
    const filteredProducts = PRODUCTS.filter((product) => {
      if (category?.length && !category.includes(product.type)) {
        return false;
      }
      const price = parseFloat(product.price);
      if (
        (min && price < parseFloat(min)) ||
        (max && price > parseFloat(max))
      ) {
        return false;
      }
      return true;
    });
    return filteredProducts.map((product) => (
      <ProductCard
        key={product.name}
        product={product}
        updateCurrentProduct={updateCurrentProduct}
      />
    ));
  }, [updateCurrentProduct, filters]);
  return (
    <Container className="pt-4">
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-icon">
          <FiSearch />
        </InputGroup.Text>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-icon"
          type="search"
        />
      </InputGroup>
      <section syle={{ maxHeight: "300px", overflow: "scroll" }}>
        <Row className="m-0 p-0">{fetchProductList}</Row>
      </section>
    </Container>
  );
}
