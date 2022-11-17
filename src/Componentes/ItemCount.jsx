import React, {useState} from 'react'
import styled from 'styled-components';

export const ItemCount = ({ initial , stock , onAdd}) => {

      const [count, setCount] = useState(initial);
      
     
      const add = () => {
            if (count < stock) {
                setCount(count + 1);
            }
        }
    
        const subtract = () => {
            if (count > initial) {
                setCount(count - 1);
            }
        }
  return (
      <ItemContainer>
      <button onClick={subtract}>-</button>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={()=> onAdd(count)}>Agrega al carrito</button>
  </ItemContainer>
  )
}
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #434343;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  button {
    background-color: #333;
    color: #1EB88D;
    border: none;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
  }
  button:hover {
    background-color: #1EB88D;
    color: #333;
  }
  p {
    background-color: #666;
    padding: 8px;
    border-radius: 5px;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
  }
`