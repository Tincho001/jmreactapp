import React from 'react';
//import {LayoutContainerStyled, ContentContainerStyled} from './LayoutStyles';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { Box } from '@chakra-ui/react';



const Layout = ({ children }) => {
  return (
<Box>
      <Header />
      <Box> {children}</Box>
      <Footer />
</Box>

  );
};

export default Layout;
