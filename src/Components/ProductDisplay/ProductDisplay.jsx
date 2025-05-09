import React, { useContext } from "react";
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const isInCart = cartItems[product.id] > 0;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, i) => <span key={i} className="star filled">★</span>)}
          <span className="star empty">★</span>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div><div>M</div><div>L</div><div>XL</div><div>XXL</div>
          </div>
        </div>

        {isInCart ? (
          <Link to="/cart">
            <button className="go-btn">GO TO CART</button>
          </Link>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product.id)}>ADD TO CART</button>
        )}

        <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
