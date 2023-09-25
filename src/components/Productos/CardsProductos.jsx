import React from 'react';
import {
  ButtonContainerStyled,
  ProductosContainer,
} from './CardsProductosStyles';

import { Products } from '../../data';
import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

const CardsProductos = () => {
  return (
    <>
      <ProductosContainer>
        {Object.entries(Products).map(([, cass]) =>
          cass.map(cas => <CardProducto key={cas.id} {...cas} />)
        )}
      </ProductosContainer>
      <ButtonContainerStyled>
      <Button>ver mas</Button>
      <Button>ver menos</Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
