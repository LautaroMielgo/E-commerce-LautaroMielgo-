
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Item = ({ listProducts }) => {
  return (
    <CardContainer>
        <img src={listProducts.image} alt="img" />
        <h3>{listProducts.title}</h3>
        <p>Precio: ${listProducts.price}</p>
        <NavLink to={`/product/${listProducts.id}`}>Ver Detalles</NavLink>
    </CardContainer> 
)
};
          
          

export default Item;

const CardContainer = styled.div`
background-color: white;
width: 330px;
height: 430px;
border: solid 1px #e9e9e9;
border-radius: 8px;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
overflow: hidden;
margin: 20px;
text-align: center;
transition: all 0.25s;
cursor: pointer;
&:hover {
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
img {
  width: 300px;
  height: 220px;
}
h3 {
  font-weight: 600;
  font-size: 15px;
}
p {
  padding: 1rem;
  font-size: 16px;
}
a {
  font-weight: 500;
  text-decoration: none;
  color: #1EB88D;
  background-color: #333;
  padding: 12px;
  border-radius: 5px;
}
a:hover {
  background-color: #1EB88D;
  color: #333;
  padding: 12px;
  border-radius: 5px;
}
`