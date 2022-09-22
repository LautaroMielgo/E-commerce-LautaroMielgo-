
import React from 'react';


const Item = ({ product }) => {
    console.log(product)
  return (
      <>
          <img src={product.image} alt="img" />
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>
          <a href='#'>Ver Detalles</a>  
      </> 
  )
}

export default Item;