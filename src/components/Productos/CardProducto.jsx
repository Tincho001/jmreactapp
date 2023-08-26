import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyles'
import { Button } from '@mui/material'

const CardProducto = () => {
  return (
    <ProductosCard>
      <img src='https://integradorjs-gray.vercel.app/assets/img/products/fundas/cristal.jpg' alt= ''/>
<h2>funda</h2>
<p>descrip</p>

<ContainerPrice>
    <CardPrice> 5000</CardPrice>
    <Button>agregar</Button>
</ContainerPrice>

    </ProductosCard>
    
  )
}

export default CardProducto