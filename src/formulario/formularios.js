import React, {useState} from 'react'
import { db } from '../firebase/firebase';
import { collection, addDoc,doc,updateDoc, serverTimestamp, } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import swal from 'sweetalert';



const Formularios = () => {

const { cartList, totalPrice , cleanCart } = useCartContext();
const [nombre, setnombre] = useState('');
const [usuarios, setusuarios] = useState([]);
const [apellido, setapellido] = useState('')

const [Email, setEmail] = useState('');





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
        cartList.forEach(producto => {
          actualizarStock(producto);
        });
        cleanCart();
        
      })
      swal({
        title: "¡Felicitaciones!",
        text: "Tu compra ha sido realizada con éxito.",
        icon: "success",
      });
    }
    const actualizarStock = (prod) =>{
      const updateStock = doc(db, "products", prod.id);
      updateDoc(updateStock,{stock:(prod.stock - prod.quantity )});
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

console.log(usuarios)
setusuarios(...usuarios, {nombre,apellido,Email});

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
        
           
        <Link to="/">
        <button onClick={finalizarCompra}>finalizarCompra</button>
          </Link>
        
        </>
        
</div>
  )
}

export default Formularios;