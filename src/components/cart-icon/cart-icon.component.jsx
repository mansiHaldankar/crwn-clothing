import { useContext } from "react";
import { ReactComponent as CartIconImg } from "../../assets/cart-dropdown.styles.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = (props) => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon-container"
      onClick={() => dispatch(setIsCartOpen(!isCartOpen))}
    >
      <CartIconImg className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
