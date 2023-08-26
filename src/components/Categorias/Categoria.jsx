import React from 'react';

import { CardCategoria } from './CategoriasStyles';

export const Categoria = ({title, category}) => {

  return (
  <CardCategoria
  selected={false}
  onClick={e=>e.preventDefault()}
  whileTap={{scale : 1.1}}>
<h2>{title}</h2>

  </CardCategoria>
  )
}

export default Categoria