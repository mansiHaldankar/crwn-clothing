import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  }
  const addItemHandler = () => {
    addItemToCart(cartItem);
  }
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="name" />
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
