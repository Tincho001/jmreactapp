import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../barsMenu/BarsMenu';
import {
  CartNavStyled,
  Logo,
  NavLinkStyled,
  Navbar,
  NavbarList,
  StyledHeader,
} from './HeaderStyles';
import { FaUserAlt } from 'react-icons/fa';
import CartIcon from './CartIcon/CartIcon';

const Header = () => {
  const ctx = useContext(MenuContext);

  return (
    <>
      <StyledHeader>
        <Logo src='./images/logo.png' alt='Logo' />
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavLinkStyled to='/'>Inicio</NavLinkStyled>
            <NavLinkStyled to='/tienda'>Tienda</NavLinkStyled>
          
          
            <NavLinkStyled>
              <FaUserAlt />
            </NavLinkStyled>
            <CartNavStyled>
              <CartIcon />
            </CartNavStyled>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </StyledHeader>
    </>
  );
};

export default Header;
