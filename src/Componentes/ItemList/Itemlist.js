import React from 'react'
import  Item  from '../Item'


export const Itemlist = ({ listProducts }) => {
  return (
    <div style={styles.container}>
      {listProducts.map((prod,i) => <Item key={`${prod.id}-${i}`} product={prod}/>)} 
       
    </div>
  )
}

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}