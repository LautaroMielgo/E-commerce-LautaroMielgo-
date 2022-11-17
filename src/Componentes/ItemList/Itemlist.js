import React from 'react'
import  Item  from '../Item'
import styled from 'styled-components'



export const Itemlist = ({ listProducts }) => {
  return (
    
    <ProductsContainer>
  
        {listProducts.map((listProducts) =>
            <Item key={listProducts.id} listProducts={listProducts} />
            )}
    
    </ProductsContainer>
)
}

const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`