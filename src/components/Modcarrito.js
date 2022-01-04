import React, { useContext, useState } from 'react'
import { ContextoCarrito } from '../routes/AppRouter'
import { Botonpagar, Cantidad, Modalcarrito, Modalint, Precioynombre, Restar, Sumar } from '../styles/template'
import cantidadMenos from "../images/menos.jpg";
import cantidadMas from "../images/add.png";
import { useNavigate } from 'react-router';

export default function Modcarrito() {

    const {carrito, setCarrito} = useContext(ContextoCarrito)
    console.log(carrito)
    

    const redirect = useNavigate()

    return (
        <div>
        <Modalcarrito>
            <Modalint>
                <Precioynombre>
                <img src={carrito.producto.imagen}/>
                <p>{carrito.producto.precio}</p>

                </Precioynombre>

                <Cantidad>
        <Restar
          src={cantidadMenos}
          alt="imagen"
          onClick={() => {
            if (carrito.producto.cantidad > 0) {
                
              setCarrito((prevState) => {
                return {
                  ...prevState,
                  producto: {
                    ...prevState.producto,
                    cantidad: prevState.producto.cantidad - 1
                  }                 
                }
              })
              
            }
          }}
        />
        <h3>{carrito.producto.cantidad}</h3>
        <Sumar
          src={cantidadMas}
          alt="imagen"
          onClick={() => {
            setCarrito((prevState) => {
              return {
                ...prevState,
                producto: {
                  ...prevState.producto,
                  cantidad: prevState.producto.cantidad + 1
                }                 
              }
            })
          }}
        />
      </Cantidad>
               



            </Modalint>
            

       
        </Modalcarrito>

<Botonpagar onClick={()=>redirect('/FormLogin')}>
Ingresa y paga
</Botonpagar>
</div>
    )
}
