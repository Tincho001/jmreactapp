import React from 'react';
import {
  ButtonContainerStyled,
  ProductosContainer,
} from './CardsProductosStyles';
import { Button } from '@mui/material';
import { Products } from '../../data';
import CardProducto from './CardProducto';

const CardsProductos = () => {
  return (
    <>
      <ProductosContainer>
        {Object.entries(Products).map(([, cass]) =>
          cass.map(cas => <CardProducto key={cas.id} {...cas} />)
        )}
      </ProductosContainer>
      <ButtonContainerStyled>
        <Button>Ver menos</Button>
        <Button>Ver mas</Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
