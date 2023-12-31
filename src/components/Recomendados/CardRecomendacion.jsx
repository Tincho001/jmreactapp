import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  CardFooter,
} from '@chakra-ui/react';

import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CardRecomendacion = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      bg='brand.800'
      size='sm'
      w='100%'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '300px' }}
        src={img}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text py='5'>{desc}</Text>
          <Text py='5'>${price}</Text>
        </CardBody>
        <CardFooter>
          <Button
            onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
            variant='outline'
            colorScheme='whiteAlpha'
          >
            Comprar ahora
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CardRecomendacion;
