import React from 'react';
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Description from '../pages/Description/Description';
import Home from '../pages/Home/Home';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Tienda from '../pages/Tienda/Tienda';

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='tienda' element={<Tienda />} />
          <Route path='description' element={<Description />} />
          <Route path='*' element={<PageNotFound />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
