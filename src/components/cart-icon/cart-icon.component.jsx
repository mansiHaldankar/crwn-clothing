import { useContext } from 'react';
import {ReactComponent as CartIconImg } from '../../assets/cart-dropdown.styles.svg';

import './cart-icon.styles.scss'
import { CartContext } from '../../context/cart.context';

const CartIcon = (props) => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    return(
        <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
            <CartIconImg className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;