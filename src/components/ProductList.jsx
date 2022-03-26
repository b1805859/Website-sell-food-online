import React from "react";

import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="productlist">
      <div className="productlist__text">Quality Products</div>
      <div className="productlist__title">Pizza Menu As Expected!</div>
      <div className="productlist__cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="productlist__button">
          <a href="/">view all products</a>
      </div>
    </div>
  );
};

export default ProductList;
