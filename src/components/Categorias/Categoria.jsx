import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Categoria = ({ title, category }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <Tabs  size='md'defaultIndex={1}  colorScheme='whiteAlpha'>
      <TabList>
        <Tab
          variant='enclosed'
          width={{ md: 60 }}
          isSelected={category === selectedCategory}
          onClick={() => dispatch(selectCategory(category))}
          style={
            category === selectedCategory
              ? { color: '#5988FF', }
              : {}
          }
        >
          {title}
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Categoria;

