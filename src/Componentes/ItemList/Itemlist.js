import React from 'react'
import { Item } from '../Item'


export const Itemlist = ({ listproducts }) => {
  return (
    <>
      {listproducts.map((prod,i) => <Item key={`${prod.product}-${i}`} product={prod}/>)} 
       
    </>
  )
}
