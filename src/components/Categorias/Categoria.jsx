import React from 'react';

import { selectCategory } from '../../redux/categories/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonGroup} from '@chakra-ui/react'



export const Categoria = ({  title, category }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  const dispatch = useDispatch();
  
 
  return (
<ButtonGroup variant='outline'>
  <Button 
    colorScheme='twitter'
    isActive={category === selectedCategory}
    isDisabled={false}  
    onClick={() => dispatch(selectCategory(category))}
  >
    {title}
  </Button>
</ButtonGroup>
  );
};




export default Categoria;
