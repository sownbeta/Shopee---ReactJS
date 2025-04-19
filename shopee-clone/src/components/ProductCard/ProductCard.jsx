import React from "react";
import "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3 className="name">{product.name}</h3>
      <p className="price">{product.price.toLocaleString()}₫</p>
      <span className="sold">Đã bán {product.sold}</span>
    </div>
  );
};

export default ProductCard;
