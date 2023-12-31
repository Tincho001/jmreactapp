import React from 'react';
import {
  ButtonContainerStyled,
  ProductosContainer,
} from './CardsProductosStyles';

import CardProducto from './CardProducto';
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';
import { TotalProducts } from '../../data/Products';

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory],
    };
  }
  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);
  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, cases]) =>
          cases.map(cass => {
            if (limit >= cass.id || selectedCategory) {
              return <CardProducto key={cass.id} {...cass} />;
            }
            return null;
          })
        )}
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            variant='ghost'
            colorScheme='brand.400'
            bg='brand.500'
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            isDisabled={INITIAL_LIMIT === limit}
          >
            Ver menos
          </Button>

          <Button
            variant='ghost'
            colorScheme='brand.400'
            bg='brand.500'
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            isDisabled={TotalProducts <= limit}
          >
            Ver mas
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
