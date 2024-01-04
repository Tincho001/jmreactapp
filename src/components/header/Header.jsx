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
  NavLinkContact
} from './HeaderStyles';
import ModalChakra from './ModalChakra/ModalChakra';
//import ModalRegister from './ModalRegister/ModalRegister';
import { FcContacts } from "react-icons/fc";


const Header = () => {
  const ctx = useContext(MenuContext);
  const { handleLinkClick } = useContext(MenuContext);

  return (
    <>
      <StyledHeader>
        <Logo src='./images/logo.png' alt='Logo' />
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavLinkStyled to='/' onClick={handleLinkClick}>Inicio</NavLinkStyled>
            <NavLinkStyled to='/tienda' onClick={handleLinkClick}>Tienda</NavLinkStyled>
         
            <NavLinkContact to='/contacto'><FcContacts /></NavLinkContact>
            
            {/* <NavLinkRegister onClick={handleLinkClick}>
            
                <ModalRegister/>
             
            </NavLinkRegister> */}


            <CartNavStyled onClick={handleLinkClick}>
         
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
