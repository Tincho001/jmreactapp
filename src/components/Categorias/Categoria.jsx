import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup,} from '@chakra-ui/react';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Categoria = ({ title, category }) => {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const dispatch = useDispatch();

  return (
   
    <ButtonGroup variant='outline'  display={{ md: "flex"}}>
      <Button 
    mt={{ base: 4, md: 0 }} ml={{ sm: 6 }}
      width={{ md: 60 }}
        colorScheme='whiteAlpha'
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
