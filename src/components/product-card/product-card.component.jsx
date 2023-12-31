// import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./product-card.styles.scss";
// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    // imageUrl
  } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCartClickHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img
        src={require("../../assets/785054-ecommerce-istock-020119.jpg")}
        alt={`${name}`}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartClickHandler}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
