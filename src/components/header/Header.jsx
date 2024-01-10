import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../barsMenu/BarsMenu';
import {
  CartNavStyled,
  NavLinkStyled,
  Navbar,
  NavbarList,
  NavLinkContact,
} from './HeaderStyles';
import ModalChakra from './ModalChakra/ModalChakra';
import { FcContacts } from 'react-icons/fc';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Link as ChakraLink, Image } from '@chakra-ui/react';

const Header = () => {
  const ctx = useContext(MenuContext);
  const { handleLinkClick } = useContext(MenuContext);

  return (
    <>
      <Box
        margin='0 auto'
        height='100px'
        display='flex'
        justifyContent='space-around'
        alignItems='center'
        padding='0 80px 0 50px'
        position='fixed'
        width='100%'
        top='0'
        zIndex='2'
        backgroundColor='#131415'
        backgroundImage='var(--bg-img)'
        boxShadow='dark-lg'

      >
        <ChakraLink as={ReactRouterLink} to='/'>
          <Image boxSize='150px' src='./images/logo.png' alt='Logo' />
        </ChakraLink>
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavLinkStyled to='/' onClick={handleLinkClick}>
              Inicio
            </NavLinkStyled>
            <NavLinkStyled to='/tienda' onClick={handleLinkClick}>
              Tienda
            </NavLinkStyled>

            <NavLinkContact to='/contacto' onClick={handleLinkClick}>
              <FcContacts />
            </NavLinkContact>

            <CartNavStyled onClick={handleLinkClick}>
              <ModalChakra />
            </CartNavStyled>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </Box>
    </>
  );
};

export default Header;
