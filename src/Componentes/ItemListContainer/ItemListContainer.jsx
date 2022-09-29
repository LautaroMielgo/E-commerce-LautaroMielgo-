
import React from 'react'
import { ItemCount } from '../ItemCount';
import { useEffect, useState } from 'react';
import { Itemlist } from '../ItemList/Itemlist';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import { API } from '../../constante/api';




const ItemListContainer = ({ greeting }) => {

  let { id } = useParams();

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const url = id ? `${API.CATEGORY}${id}` : API.LIST;
    const getItem = async () => {

      try {
        const res = await fetch(url);
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

  },[id])

  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }
   
 return (
  <>
    <h1>bienvenido { greeting }</h1>
    {loading ? 'cargando' : <Itemlist listProducts={listProducts}/>}
    
    
  </>
  )
}

export default ItemListContainer
