import React, {createContext, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import LogoCarrito from "../components/LogoCarrito";
import { Navbar } from "../components/Navbar";
import { Bebidas } from "../components/Bebidas";
import { Tamales } from "../components/Tamales";
import { Guajolotas } from "../components/Guajolotas";
import Busqueda from "../components/Busqueda";
import GlobalStyle from "../globalstyles/Globalstyle";
import { GuajolotaDetailView } from "../components/GuajolotaDetailView";
import  BebidaDetailView  from "../components/BebidaDetailView";
import NavbarLayout from "../components/NavbarLayout";
import TamalesDetailView from "../components/TamalesDetailView";
import Carrito from "../components/Carrito";
import { Bebidadetalle } from "../components/Bebidadetalle";
import { Tamalesdetalle } from "../components/Tamalesdetalle";
import Modcarrito from "../components/Modcarrito";
import FormLogin from "../components/usuarios/FormLogin";
import FormRegistro from '../components/usuarios/FormRegistro'
import Stripeprueba from "../components/stripe/Stripeprueba";


export const ContextoCarrito = createContext({
  setCarrito: () => null,
  carrito: null,
})

export default function AppRouter() {
  const [carrito, setCarrito] = useState({
    producto: { cantidad: 0 },
    sabor: null,
    bebidas: []
  })
  const datosContexto = {
    carrito,
    setCarrito
  }
  return (
    <ContextoCarrito.Provider value={datosContexto}>
      <BrowserRouter>
      <LogoCarrito />
      <Logo />
        <Routes>
          <Route exact path="/Guajolotas" element={<NavbarLayout component={Guajolotas} />} />
          <Route exact path="/Guajolotas/:id" element={<GuajolotaDetailView />} />
          <Route exact path="/Carrito" element={<Carrito />} />
          <Route exact path="/Modcarrito" element={<Modcarrito />} />
          <Route exact path="/FormLogin" element={<FormLogin />} />
          
          <Route exact path="/prueba" element={<Stripeprueba/>} />

          <Route exact path="/registro" element={<FormRegistro />} />
          <Route exact path="/Bebidas" element={<NavbarLayout component={Bebidas} />} />
          <Route exact path="/Bebidas/:id" element={<Bebidadetalle/>} />
          <Route exact path="/Tamales" element={<NavbarLayout component={Tamales} />} />
          <Route exact path="/Tamales/:id" element={<Tamalesdetalle/>} />
        </Routes>
      </BrowserRouter>


      <GlobalStyle/>
    </ContextoCarrito.Provider>
  );
}
