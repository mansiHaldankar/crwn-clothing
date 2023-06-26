import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    const signOutHandler = async() => {
      await signOutUser();
      setCurrentUser(null)
    }
    return (
        <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            (currentUser &&
              <NavLink as={'span'} onClick={signOutHandler}>SIGN OUT</NavLink> 
              ) ||
            <NavLink to='/auth'>
            SIGN-IN
          </NavLink>}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
          </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
    )
}

export default Navigation;