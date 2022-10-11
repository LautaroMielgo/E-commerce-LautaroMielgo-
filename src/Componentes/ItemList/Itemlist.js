import React from 'react'
import  Item  from '../Item'


export const Itemlist = ({ listProducts }) => {
  return (
    <div style={styles.container}>
        {listProducts.map((listProducts) =>
            <Item key={listProducts.id} listProducts={listProducts} />
        )}
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