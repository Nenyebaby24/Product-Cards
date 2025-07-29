// ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard(props) {

    
    
  return (
    <div className="product-card">
      <img src={props.img} alt={props.alt} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <p className="product-price">{props.price}</p>
        <p className="product-description">{props.description}</p>
        <button className="buy-button"onClick={() => props.onBuy(props.name)}>{props.button}</button>
      </div>
    </div>
  );
}
export default ProductCard;




