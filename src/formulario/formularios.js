import React, {useState} from 'react'
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp, } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';

const Formularios = () => {

const { cartList, totalPrice , cleanCart } = useCartContext();
const [nombre, setnombre] = useState('');
const [usuarios, setusuarios] = useState([]);
const [apellido, setapellido] = useState('')
const [apellidos, setapellidos] = useState([]);
const [Email, setEmail] = useState('');
const [Emails, setEmails] = useState([]);




const comprador = {
      nombre: nombre,
      apellido: apellido,
      email: Email,
    };
  
    const finalizarCompra = ()=>{
      const ventasCollection = collection(db,"ventas");
      addDoc(ventasCollection, {
        comprador,
        items: cartList,
        date: serverTimestamp(),
        price: totalPrice(),
        
        
        
      })
      .then(result=>{
        console.log(result.id);
        
        cleanCart();
      })
    }


const nombreChange = (e) => {
setnombre(e.target.value)
};
const apellidoChange = (e) => {
setapellido(e.target.value)
};
const EmailChange = (e) => {
setEmail(e.target.value)
};


const userschange = () => {
setusuarios([...nombre, usuarios]);
setapellidos([...apellido, apellidos]);
setEmails([...Email, Emails]);
};




  return (
<div>
      <input type="text" onChange={nombreChange}/>
      <input type="text" onChange={apellidoChange}/>
      <input type="text" onChange={EmailChange}/>
      <button onClick={userschange}>agregar a la lista</button>
      
      <>
          <p className='price'>Precio Total: ${totalPrice()}</p>
          <button onClick={cleanCart}>Vaciar carrito</button>
          <button onClick={finalizarCompra}>finalizarCompra</button>
        </>
        
</div>
  )
}

export default Formularios;