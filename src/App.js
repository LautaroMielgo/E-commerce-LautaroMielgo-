import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer";




const App = () => {

  const msj = "este es un mensaje para mi pagina"
     
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting ={msj} />
    
    </>
  )
}

export default App
