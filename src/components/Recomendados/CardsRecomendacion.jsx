import React from 'react';
import CardRecomendacion from './CardRecomendacion';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';

const CardsRecomendacion = () => {
  const recommended = useSelector(state => state.recommended.recommended);

  return (
    <Box>
      {recommended.map(recomendado => (
        <CardRecomendacion key={recomendado.id} {...recomendado} />
      ))}
    </Box>
  );
};

export default CardsRecomendacion;
