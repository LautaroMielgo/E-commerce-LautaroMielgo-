
import { style } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    console.log(product)
  return (
      <div style={styles.div}>
          <img style={styles.imagen} src={product.image} alt="img" />
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>
          <Link to={`/product/${product.id}`}>
            Ver Detalles
          </Link> 
      </div> 
      )
    }
          
          

export default Item;

const styles = {
    imagen : {
        width: '330px',
        height: '260px',
        margin: '20px',

      },
      div: {
        display: 'flex',
        flexflow: 'row wrap',
        justifycontent: 'center',
        alignitems: 'center',
        
        
      }
}

    