import React from 'react';
import {LayoutContainerStyled, ContentContainerStyled} from './LayoutStyles';
import Header from '../header/Header';
import Footer from '../Footer/Footer';



const Layout = ({ children }) => {
  return (
<LayoutContainerStyled>
      <Header />
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer />
</LayoutContainerStyled>

  );
};

export default Layout;
