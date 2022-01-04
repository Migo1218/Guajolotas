import carrito from '../images/carrito.png'


import React from 'react'
import { Carritotemplate } from '../styles/template'
import { useNavigate } from 'react-router-dom'



export default function LogoCarrito() {

const navegar = useNavigate()
    return (
        <div>
            <Carritotemplate src={carrito} alt="carrito" onClick={()=>navegar(`/Carrito`)}/>
        </div>
    )
}
