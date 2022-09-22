import React from 'react';



const ItemDetail = ({ listProduct }) => {
  return (
    <>
      <div className='divContainer'>
        <h3>{listProduct.category}</h3>
        <img src={listProduct.image} alt="img" />
      </div>
      <div className='divContainer'>
        <h4>{listProduct.title}</h4>
        <p>{listProduct.description}</p>
       
        <p className='price'>Precio: ${listProduct.price}</p>  
      </div> 
    </>
    
  )
}
export default ItemDetail