import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

  const { totalQuantity } = useCartContext();

  return (
    <div>
      <AddShoppingCartIcon fontSize="large"/>
      <p className='totalQuantity'>{totalQuantity()}</p>
    </div>
  )
}

export default CartWidget;

