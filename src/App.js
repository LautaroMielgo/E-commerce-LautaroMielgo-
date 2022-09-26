import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Componentes/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {

  const msj = "este es un mensaje para mi pagina"
     
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={msj} />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting={msj} />}/>
        <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App
