import React from 'react'
import { NavbarItem } from '../HeaderStyles'
import { FaShoppingCart } from 'react-icons/fa'

const CartIcon = () => {
  return (
 <NavbarItem>
    <FaShoppingCart/>
    <span>0</span>
 </NavbarItem>
  )
}

export default CartIcon

