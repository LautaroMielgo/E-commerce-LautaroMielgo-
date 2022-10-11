import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./Componentes/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';




const App = () => {

  const msj = "este es un mensaje para mi pagina"
     
  return (
    <>
    <BrowserRouter>
    <CartContextProvider>

      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={msj} />}/>
        <Route path='/category/:category' element={<ItemListContainer greeting={msj} />}/>
        <Route path='/product/:id' element={ <ItemDetailContainer />}/>
        <Route path='/cart' element={<CartView />}/>
      </Routes>

    </CartContextProvider>
    </BrowserRouter>
  </>
  );
}

export default App
