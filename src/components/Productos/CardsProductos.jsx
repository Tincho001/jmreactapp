import React from 'react';
import {
  ButtonContainerStyled,
  ProductosContainer,
} from './CardsProductosStyles';

import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {INITIAL_LIMIT} from '../../utils'
import { TotalProducts } from '../../data/Products';

const CardsProductos = () => {

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products)
  const selectedCategory = useSelector (state => state.categories.selectedCategory)
  if (selectedCategory){
    products = {
      [selectedCategory] : products[selectedCategory]
    }
  }
  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);
  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, cases]) =>
          cases.map(cass =>{
            if (limit >=cass.id || selectedCategory) {
              return <CardProducto key={cass.id} {...cass} />;
            } 
            return null;
        })
        )}
        
      </ProductosContainer>

      {!selectedCategory && (<ButtonContainerStyled>
      <Button onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT === limit}
          >Ver menos</Button>

      <Button onClick={()=>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
      disabled={TotalProducts <= limit}>Ver mas</Button>
      </ButtonContainerStyled>)}
      
    </>
  );
};

export default CardsProductos;
