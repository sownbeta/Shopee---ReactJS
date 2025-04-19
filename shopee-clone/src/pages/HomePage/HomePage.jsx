import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Sản phẩm nổi bật</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
