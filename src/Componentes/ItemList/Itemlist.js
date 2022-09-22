import React from 'react'
import  Item  from '../Item'


export const Itemlist = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((prod,i) => <Item key={`${prod.id}-${i}`} product={prod}/>)} 
       
    </>
  )
}
