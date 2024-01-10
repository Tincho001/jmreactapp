import React from 'react';
import Categoria from './Categoria';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

const Categorias = () => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <Box alignItems="center" justifyContent="center" p={4} display={{ md: "flex" }} >
      {categories.map(category => (
        <Box ><Categoria key={category.id} {...category} /></Box>
      ))}
    </Box>
  );
};

export default Categorias;
