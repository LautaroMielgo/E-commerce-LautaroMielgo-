import React, { useState, useEffect } from "react";
import  ItemDetail  from "./ItemDetail";



const ItemDetailContainer = () => {

      const [listProduct, setListProduct] = useState({});
      const [loading, setLoading] =useState(true);
  
      useEffect(() => {
  
        const getItem = async () => {
    
          try {
            const res = await fetch('https://fakestoreapi.com/products/14');
            const data = await res.json();
            setListProduct(data);
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
    
      },{})
  
  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : 'cargando'}
    </>
  );

};

export default ItemDetailContainer;