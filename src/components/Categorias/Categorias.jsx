import React from 'react';
import { Categories } from '../../data/Categories';
import { CategoriasContainer } from './CategoriasStyles';
import Categoria from './Categoria';

const Categorias = () => {
  return (
    <CategoriasContainer>
        {Categories.map(category=>
             <Categoria key={category.id}{...category} /> )}
    
    </CategoriasContainer>
    
  );
};

export default Categorias;
