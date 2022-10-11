import React from 'react'
import { useEffect, useState } from 'react';
import { Itemlist } from '../ItemList/Itemlist';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where }from 'firebase/firestore'








const ItemListContainer = ({ greeting }) => {

  let { id } = useParams();

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(() => {
  const productCollection = collection(db,'productList');
  const q = query(productCollection, where("category", "==", "jewelery"));
   
  getDocs(productCollection)
    .then((data)=>{
      
  const lista = data.docs.map((product)=>{
    return {
      ...product.data(),
      id : listProducts.id
    }
  })
  setListProducts(lista);
})
.finally(()=>{
  setLoading(false);
})


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
