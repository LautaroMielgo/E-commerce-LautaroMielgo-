import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore";



const ItemDetailContainer = () => {
  
      const { id } = useParams();
      const [listProduct, setlistProduct] = useState({});
      const [loading, setLoading] =useState(true);
      const [error, setError] = useState(false);
  
      useEffect(() => {
        const productCollection = collection (db, 'productList');
        const docRef = doc(productCollection, id)
        console.log(docRef);
        getDoc(docRef)
        .then((resultado) =>{
          setlistProduct(
            {
            id: resultado.id,
            ...resultado.data(),
            }
          );
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);
  
    return (
      <>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h1>Ocurrio un error</h1>
        ) : (
          <ItemDetail listProduct={listProduct} />
        )}
      </>
    );
  };

export default ItemDetailContainer;