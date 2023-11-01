import React from 'react';
import { CardCategoria } from './CategoriasStyles';
import { selectCategory } from '../../redux/categories/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Categoria = ({ title, category }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 1.1 }}
    >
      <h2>{title}</h2>
    </CardCategoria>
  );
};

export default Categoria;
