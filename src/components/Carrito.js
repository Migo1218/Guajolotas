import React from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react/cjs/react.development'
import { ContextoCarrito } from '../routes/AppRouter'
import { Cantidadcarrito, Carritoh1, Divcarrito, Divguajolotacarrito, Preciocarrito, Totaldetalle } from '../styles/template'

export default function Carrito() {
  const {carrito} = useContext(ContextoCarrito)
    console.log(carrito)

    const redirect = useNavigate()

    return (
        <div>
            <Carritoh1>Carrito</Carritoh1>
            <Divcarrito>
                <Divguajolotacarrito onClick={()=>redirect('/Modcarrito')}>
                <img src={carrito.producto.imagen} alt="imagen"></img>
                <p>{carrito.producto.nombre}</p>
                <Cantidadcarrito>x{carrito.producto.cantidad}</Cantidadcarrito>
                <Preciocarrito>{carrito.producto.precio}</Preciocarrito>
                </Divguajolotacarrito>

                <Totaldetalle>
                    <p>Total</p>
                    <p>{carrito.producto.precio}</p>
                </Totaldetalle>
            </Divcarrito>
        </div>
    )
}

