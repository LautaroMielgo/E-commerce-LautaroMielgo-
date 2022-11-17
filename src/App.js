import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListContainer  from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./Componentes/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import Formularios from "./formulario/formularios";




const App = () => {

  const msj = "TENEMOS LOS MEJORES CALZADOS DE BASQUET"
     
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
        <Route path='/formularios' element={<Formularios />}/>
      </Routes>

    </CartContextProvider>
    </BrowserRouter>
  </>
  );
}

export default App
