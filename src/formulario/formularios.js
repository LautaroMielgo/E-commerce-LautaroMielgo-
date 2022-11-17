import React, {useState} from 'react'
import { db } from '../firebase/firebase';
import { collection, addDoc,doc,updateDoc, serverTimestamp, } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import styled from 'styled-components';


const Formularios = () => {

const { cartList, totalPrice , cleanCart } = useCartContext();
const [nombre, setnombre] = useState('');
const [usuarios, setusuarios] = useState([]);
const [apellido, setapellido] = useState('')
const [loadForm, setLoadForm] = useState(false);
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


const handleClick = () => {

console.log(usuarios)
setusuarios(...usuarios, {nombre,apellido,Email});
setLoadForm(true);
};




  return (
<FormContainer>
      <h2>Completa el formulario</h2>
      <label htmlFor="name">Nombre</label>
      <input type="text" onChange={nombreChange}/>

      <label htmlFor="surname">Apellido</label>
      <input type="text" onChange={apellidoChange}/>
      
      <label htmlFor="email">Email</label>
      <input type="text" onChange={EmailChange}/>
      
      
      
      <div>
      {loadForm === false
          ? 
            <button type='submit' onClick={handleClick}>Confirmar Datos</button>
          : 
            <Link to='/'><button onClick={finalizarCompra}>Finalizar Compra</button></Link>
        } 
        
        </div>
        
</FormContainer>
  )
}

export default Formularios;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-family: "GrandGalaxy";
    font-size: 3.2rem;
    font-style: italic;
    color : #f8f8ff;
  }
  label {
    padding: 10px;
    color: #f8f8ff;
  }
  input {
    width: 400px;
    height: 25px;
    margin-bottom: 10px;
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
    cursor: pointer;
  }
  button:hover {
    background-color: #1EB88D;
    color: #333;
  }
  .divForm {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px 30px;
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .divButtons {
    display: flex;
    flex-flow: row wrap;
  }
`