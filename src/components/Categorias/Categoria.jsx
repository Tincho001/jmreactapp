import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Menu, MenuList, MenuItem } from '@chakra-ui/react';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Categoria = ({ title, category }) => {
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const dispatch = useDispatch();

  return (
    <Menu>
      <ButtonGroup
        as={Button}
        mt={{ base: 2, md: 0 }}
        ml={{ sm: 2, md: 0 }}
        width={{ md: 60 }}
        colorScheme='whiteAlpha'
        isActive={category === selectedCategory}
        isDisabled={false}
        display={{ base: 'none', md: 'block' }}  
      >
        {title}
      </ButtonGroup>
      <MenuList>
        <MenuItem onClick={() => dispatch(selectCategory(category))}>
          {title}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Categoria;
