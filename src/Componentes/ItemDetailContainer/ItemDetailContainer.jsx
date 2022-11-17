import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore";
import styled from "styled-components";



const ItemDetailContainer = () => {
  
      const { id } = useParams();
      const [listProduct, setlistProduct] = useState({});
      const [loading, setLoading] =useState(true);
      const [error, setError] = useState(false);
  
      useEffect(() => {
        const productCollection = collection(db, 'listaProductos');
        const docRef = doc(productCollection,id)
        getDoc(docRef)
        .then((resultado) => {
          setlistProduct(
            {
              ...resultado.data(),
              id: resultado.id,
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
      <DetailContainer>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h1>Ocurrio un error</h1>
        ) : (
          <ItemDetail listProduct={listProduct} />
        )}
      </DetailContainer>
    );
  };

export default ItemDetailContainer;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`