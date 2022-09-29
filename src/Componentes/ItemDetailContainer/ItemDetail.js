import React, {useState} from 'react';
import { ItemCount } from '../ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ listProduct }) => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const onAdd = () => {
    setIsButtonPressed(true);
  };
    



  return (
    <>
      <div style={styles.contenedor} className='divContainer'>
        <h3>{listProduct.category}</h3>
        <img style={styles.imagen} src={listProduct.image} alt="img" />
      </div>

      <div style={styles.info}>
        <h4>{listProduct.title}</h4>
        <p>{listProduct.description}</p>
        <p className='price'>Precio: ${listProduct.price}</p>  
      </div>
       
      <div className='divContainer'>
        {!isButtonPressed ? (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar Compra</button>
          </Link>
        )}
      </div> 
    </>
    
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
  maxWidth: "25%"
},
info:{
  display: "flex",
  flexDirection: "column",
},

  
}

