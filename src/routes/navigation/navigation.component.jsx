import {
  Outlet,
  // Link
} from "react-router-dom";
// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../context/user.context";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutHandler = async () => {
    // await signOutUser();
    // setCurrentUser(null);
    dispatch(signOutStart());
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {(currentUser && (
            <NavLink as={"span"} onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          )) || <NavLink to="/auth">SIGN-IN</NavLink>}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
