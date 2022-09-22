
import React from 'react'
import { ItemCount } from './ItemCount';
import { useEffect, useState } from 'react';
import { Itemlist } from './ItemList/Itemlist';

import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';



const ItemListContainer = ({ greeting }) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const getItem = async () => {

      try {
        const res = await fetch('https://fakestoreapi.com/products/category/electronics');
        const data = await res.json();
        setListProducts(data);
      }
      catch(err) {
        console.log("Error:", err);
        console.error("Error:", err);
      }
      finally {
        setLoading(false);
      }
    }

    getItem();

  },[])

  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }
   
 return (
  <>
    <h1>bienvenido { greeting }</h1>
    {loading ? 'cargando' : <Itemlist listProducts={listProducts}/>}
    <ItemDetailContainer/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
  </>
  )
}

export default ItemListContainer
