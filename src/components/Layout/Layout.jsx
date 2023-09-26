import React from 'react';

import Header from '../header/Header';
import Footer from '../Footer/Footer';

import { Main } from '../globalComponents/GlobalComponents';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
     <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
