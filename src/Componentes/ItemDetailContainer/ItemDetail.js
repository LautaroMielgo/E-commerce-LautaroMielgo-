import React, {useState, useContext} from 'react';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const ItemDetail = ({ listProduct }) => {
  
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { addToCart, cartList } = useCartContext();
  
  const onAdd = (quantity) => {
    addToCart(listProduct, quantity);
    setIsButtonPressed(true);
  }
    

  



  return (
    <div style={styles.contenedor}>

      <div style={styles.divcont}>
        <h3>{listProduct.category}</h3>
        <img style={styles.imagen} src={listProduct.image} alt="img" />
      </div>

      <div style={styles.divcont}>
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
       
    </div>
    
  )
}
export default ItemDetail

const styles = {
contenedor: {
  display : "flex",
  flexDirection: "row",
  alingItems: "center",
  
},
imagen:{
  maxWidth: "40%"
},


divcont : {
  display : "flex",
  width : "40%",
  flexDirection : "column",
  justifyContent : "center",
  alignItems : "center",
}

  
}