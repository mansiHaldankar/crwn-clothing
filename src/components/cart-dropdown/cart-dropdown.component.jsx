import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-items/cart-item.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { CartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const checkoutHanlder = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={checkoutHanlder}
      >
        Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
