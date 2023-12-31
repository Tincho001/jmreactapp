import React from 'react';
import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProducto = ({ img, title, desc, price, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p fontSize='15px'>{desc}</p>

      <ContainerPrice>
        <CardPrice>$ {price}</CardPrice>
        <Button
          variant='outline'
          colorScheme='whiteAlpha'
          onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
        >
          COMPRAR
        </Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
