// import { useContext } from "react";
import "./checkout-item.styles.scss";
// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ product }) => {
  const { name, quantity, price, imageUrl } = product;
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, product));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, product));
  };
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
