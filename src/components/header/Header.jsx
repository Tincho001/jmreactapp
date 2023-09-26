import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../barsMenu/BarsMenu';
import {
  CartNavStyled,
  Logo,
  Navbar,
  NavbarItem,
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
            <NavbarItem>Inicio</NavbarItem>
            <NavbarItem>Tienda</NavbarItem>
            <NavbarItem>Nosotros</NavbarItem>
            <NavbarItem>
              <FaUserAlt />
            </NavbarItem>
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
