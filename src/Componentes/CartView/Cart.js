import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export const CartView = () => {

  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

  return (
    <>
      {cartList.map(prod => 
              <TableRow key={prod.id}>
                <TableCell align="center" className='displayNone'>
                  <img src={prod.image} alt="img"/>
                </TableCell>
                <TableCell align="center" className='bodyFont'>{prod.title}</TableCell>
                <TableCell align="center" className='bodyFont'>{prod.quantity}</TableCell>
                <TableCell align="center" className='bodyFont'>${prod.price}</TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon onClick={() => removeProduct(prod.id)} fontSize="large" className='deleteButton'></DeleteForeverIcon>
                </TableCell>
              </TableRow>
            )}
            {cartList.length === 0 
        ?
          <p className='msj'>Tu carrito esta vacío</p>
        :
        <>
          <p className='price'>Precio Total: ${totalPrice()}</p>
          <button onClick={cleanCart}>Vaciar carrito</button>
        </>
      }
    </>
  );
};