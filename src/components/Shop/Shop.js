import React from "react";
import './Shop.css'

const Shop = (props) => {
    const {handleAddToCart, product} = props
  const { price, picture, name, gender } = product;
  return (
    <div className="shop-each-item">
      <div className="shop-item-img">
        <img src={picture} alt="" />
      </div>

      <div className="shop-item-details">
        <p>{name}</p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <p>
          <small>Gender: {gender}</small>
        </p>
        <button className="shop-item-details-btn" onClick={()=> handleAddToCart(product)}>Buy</button>
      </div>
    </div>
  );
};

export default Shop;
