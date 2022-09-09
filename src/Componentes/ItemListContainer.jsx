import React from 'react'
import { ItemCount } from './ItemCount';


const ItemListContainer = ({ greeting }) => {

  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }
   
 return (
  <>
    <h1>bienvenido { greeting }</h1>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
  </>
  )
}

export default ItemListContainer
