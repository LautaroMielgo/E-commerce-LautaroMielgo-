import React from 'react'
import { useEffect, useState } from 'react';
import { Itemlist } from '../ItemList/Itemlist';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where }from 'firebase/firestore'
import styled from 'styled-components'








const ItemListContainer = ({ greeting }) => {

  const { id } = useParams();
  const { category} = useParams();
  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(() => {
  const productCollection = collection(db,'listaProductos');
  const q = query(productCollection, where("category", "==", `${category}`));

  let url = (category === undefined ? productCollection : q )


   
  getDocs(url)
    .then((data)=>{
      
  const lista = data.docs.map((product)=>{
    return {
      ...product.data(),
      id : product.id
    }
  })
  setListProducts(lista);
})
.finally(()=>{
  setLoading(false);
})


  },[category])

  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }
   
 return (
  <>
  <DivContainer>

    <h1 className='msj'> BIENVENIDO!! { greeting }</h1>
    {loading ? 'cargando' : <Itemlist listProducts={listProducts}/>}
  </DivContainer>
    
    
  </>
  )
}



export default ItemListContainer


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  .msj {
    margin-bottom: 20px;
    font-family: "GrandGalaxy";
    font-size: 4.5rem;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: #f8f8ff;
  }
`