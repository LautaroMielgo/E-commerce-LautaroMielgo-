import React, {useState} from 'react';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import styled from 'styled-components';


const ItemDetail = ({ listProduct }) => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { addToCart} = useCartContext();
  
  const onAdd = (quantity) => {
    addToCart(listProduct, quantity);
    setIsButtonPressed(true);
  }
    

  



  return (
    <Container>

    

      <div className='divContainer'>
        <h3>{listProduct.category}</h3>
        <img  src={listProduct.image} alt="img" />
      </div>

      <div className='divContainer'>
        <h4>{listProduct.title}</h4>
        <p>{listProduct.description}</p>
        <p className='price'>Precio: ${listProduct.price}</p>  
       
      
        {!isButtonPressed ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
        
        </div>
       
    
    </Container>
    
  )
}
export default ItemDetail

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .divContainer {
    background-color: white;
    width: 40%;
    @media (max-width: 830px) {
      width: 70%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  img {
    width: 330px;
    height: 260px;
    margin: 20px;
  }
  h4 {
    font-weight: 600;
    font-size: 15px;
    text-align: center;
  }
  .price {
    font-size: 20px;
  }
  .availableStock {
    margin: 0;
    color: #38E54D;
    font-size: 15px;
    font-weight: bolder;
    text-shadow: 0 0 5px #9CFF2E, 0 0 5px #9CFF2E, 0 0 5px #9CFF2E;
  }
  .notAvailableStock {
    margin: 0;
    color: #ff0303;
    font-size: 15px;
    font-weight: bolder;
    text-shadow: 0 0 5px #FF1E1E, 0 0 5px #FF1E1E, 0 0 5px #FF1E1E;
  }
  button {
    background-color: #333;
    color: #1EB88D;
    border: none;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    font-weight: bolder;
    font-family: 'Montserrat';
    font-size: 15px;
  }
  button:hover {
    background-color: #1EB88D;
    color: #333;
  }
`