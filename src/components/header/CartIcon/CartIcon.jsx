import React from 'react';
import { NavLinkStyled } from '../HeaderStyles';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  return (
    <NavLinkStyled>
      <FaShoppingCart />
      <span>0</span>
    </NavLinkStyled>
  );
};

export default CartIcon;
