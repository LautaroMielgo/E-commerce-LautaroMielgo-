
import React from 'react'
import { ItemCount } from './ItemCount';
import { products } from '../assets/productos';
import { customFetch } from '../assets/utiles/customFetch';
import { useEffect, useState } from 'react';
import { Itemlist } from './ItemList/Itemlist';


const ItemListContainer = ({ greeting }) => {

  const [listproducts, setlistproducts] = useState([])

  useEffect(() =>{
    customFetch(products)
    .then(res => setlistproducts(res))

  }, [])



  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }
   
 return (
  <>
    <h1>bienvenido { greeting }</h1>
    <Itemlist listproducts={listproducts}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
  </>
  )
}

export default ItemListContainer
