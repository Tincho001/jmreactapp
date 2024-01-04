import React from 'react';
//import {LayoutContainerStyled, ContentContainerStyled} from './LayoutStyles';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { Box, } from '@chakra-ui/react';



const Layout = ({ children }) => {
  return (
<Box  display='flex' flexDirection={'column'} justifyContent={'center'}>
      <Header />
      <Box  display='flex' justifyContent={'center'} > {children}</Box>
      <Footer />
</Box>

  );
};

export default Layout;
