import React from 'react';

import Categoria from './Categoria';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';


const Categorias = () => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" >
      {categories.map(category => (
        <Categoria key={category.id} {...category} />
      ))}
    </Box>
  );
};

export default Categorias;
