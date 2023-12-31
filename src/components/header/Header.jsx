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
  NavLinkRegister
} from './HeaderStyles';


import ModalChakra from './ModalChakra/ModalChakra';
import ModalRegister from './ModalRegister/ModalRegister';



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
         
          
            <NavLinkRegister>
            
                <ModalRegister/>
             
            </NavLinkRegister>


            <CartNavStyled>
         
              <ModalChakra/>
            </CartNavStyled>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </StyledHeader>
    </>
  );
};

export default Header;
