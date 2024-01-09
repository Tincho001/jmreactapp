import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProducto = ({ img, title, desc, price, id }) => {
  const dispatch = useDispatch();
  
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" margin={'10px'}>
      <Image src={img} alt={title} />
      <Heading as="h3" size="m" mt="2">{title}</Heading>
      <Text fontSize='15px' mt="2">{desc}</Text>

      <Box d="flex" mt="2" alignItems="center">
        <Text fontSize="lg" fontWeight="bold" mr="2">$ {price}</Text>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
        >
          COMPRAR
        </Button>
      </Box>
    </Box>
  );
};

export default CardProducto;

