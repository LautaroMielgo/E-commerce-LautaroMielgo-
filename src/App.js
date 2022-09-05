import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer";



const App = () => {

  const greeting = "este es un mensaje para mi pagina"
     
  return (
    <>
    <Navbar/>
    <ItemListContainer msj ={greeting} />
    </>
  )
}

export default App