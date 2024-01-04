import React from 'react';
import CardsProductos from '../../components/Productos/CardsProductos';
import Categorias from '../../components/Categorias/Categorias';
import { Box } from '@chakra-ui/react';

const Tienda = () => {
  return (
    <Box mt='150px'>
      <Categorias />
      <CardsProductos />
    </Box>
  );
};

export default Tienda;
