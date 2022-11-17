import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import { Link, NavLink } from "react-router-dom";
import  NameForm from "../../formulario/formulario"
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, } from "firebase/firestore";
import Formularios from "../../formulario/formulario"
import styled from "styled-components";

export const CartView = () => {

  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

 

  return (
    <CartContainer>
      <TableContainer className='tableStyle'>
        <Table aria-label="simple table">
          <TableHead className='headTable'>
            <TableRow>
              <TableCell align="center" className='headTitle displayNone'></TableCell>
              <TableCell align="center" className='headTitle'>Producto</TableCell>
              <TableCell align="center" className='headTitle'>Cantidad</TableCell>
              <TableCell align="center" className='headTitle'>Precio</TableCell>
              <TableCell align="center" className='headTitle'>Eliminar Producto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='bodyTable'>
            {cartList.map(prod => 
              <TableRow key={prod.id}>
                <TableCell align="center" className='displayNone'>
                  <img className="img" src={prod.image} alt="img"/>
                </TableCell>
                <TableCell align="center" className='bodyFont'>{prod.title}</TableCell>
                <TableCell align="center" className='bodyFont'>{prod.quantity}</TableCell>
                <TableCell align="center" className='bodyFont'>${prod.price}</TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon onClick={() => removeProduct(prod.id)} fontSize="large" className='deleteButton'></DeleteForeverIcon>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {cartList.length === 0 
        ?
          <p className='msj'>Tu carrito esta vacío</p>
        :
        <>
          <p className='price'>Precio Total: ${totalPrice()}</p>
          <div className='divButtons'>
            <button onClick={cleanCart}>Vaciar carrito</button>
            <Link to='/formularios'><button>Continuar compra</button></Link>
          </div>
        </>
      }
    </CartContainer>
  )
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tableStyle {
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
    margin: 15px;
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .headTable {
    background-color: #333;
  }
  .headTitle {
    color: #1EB88D;
    font-weight: bolder;
    font-family: 'Montserrat';
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
  .bodyTable {
    background-color: white;
  }
  .bodyFont {
    font-family: 'Montserrat';
    @media (min-width: 768px){
      font-size: 1rem;
    }
  }
  .deleteButton {
    background-color: #333;
    color: #1EB88D;
    margin: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
    cursor: pointer;
  }
  .deleteButton:hover {
    background-color: #1EB88D;
    color: #333;
  }
  button {
    background-color: #333;
    color: #1EB88D;
    border: none;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
    font-size: 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #1EB88D;
    color: #333;
  }
  .divButtons {
    display: flex;
    flex-flow: row wrap;
  }
  .price, .msj {
    font-size: 20px;
    font-weight: bolder;
    color : #f8f8ff;
  }
  .img {
    width: 100px;

  }
  @media (max-width: 768px) {
    .displayNone {
      display: none;
    }
  }
`
