import React, { useState } from "react";
import Navbar from "pages/Navbar";
import SideFilter from "pages/Dashboard/components/sideFilters";
import ProductDetail from "pages/Dashboard/components/productDetail";
import { PRODUCTS } from "./components/products";
export default function Dashboard() {
  const [currentProduct, setCurrentProduct] = useState(PRODUCTS[0]);
  const [filters, setFilters] = useState({});
  const [cart, setCart] = useState({});
  return (
    <>
      <SideFilter setFilters={setFilters} />
      <Navbar
        setCurrentProduct={setCurrentProduct}
        filters={filters}
        cart={cart}
      />
      <ProductDetail product={currentProduct} setCart={setCart} />
    </>
  );
}
