import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";





const App = () => {

  const msj = "este es un mensaje para mi pagina"
     
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting ={msj} />
    <ItemDetailContainer/>
    
    </>
  )
}

export default App
