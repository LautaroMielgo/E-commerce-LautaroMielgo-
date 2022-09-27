import React, { useState, useEffect } from "react";
import  ItemDetail  from "./ItemDetail";
import { API } from "../../constante/api";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

      const [listProduct, setListProduct] = useState({});
      const [loading, setLoading] =useState(true);
      const { id } = useParams();
  
      useEffect(() => {
        const url = `${API.PRODUCTO}${id}`;
        const getItem = async () => {
    
          try {
            const res = await fetch(url);
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
    
      },{id})
  
  return (
    <>
      {!loading ? <ItemDetail listProduct={listProduct}/> : 'cargando'}
    </>
  );

};

export default ItemDetailContainer;