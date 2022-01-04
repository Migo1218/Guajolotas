import React from 'react'
import { Beber, Bebida, Detalle } from '../styles/template'
import bebida1 from "../images/bebidas(1).png";
import bebida2 from "../images/bebidas(2).png";
import bebida3 from "../images/bebidas(3).png";
import bebida from "../images/bedida.png";
import { ContextoCarrito } from '../routes/AppRouter';
import { useContext } from 'react/cjs/react.development';


const CONSTANTS = [
    {
      id: 1,
      nombre: 'Champurrado',
      imagen: bebida3,
      precio: 12,

    },
    {
      id: 2,
      nombre: 'Atole de Arroz',
      precio: 12,

      imagen: bebida1
    },
    {
      id: 3,
      nombre: 'Chocolate caliente',
      precio: 12,

      imagen: bebida2
    },
    {
      id: 4,
      nombre: 'Café negro',
      precio: 12,
      imagen: bebida
    },
  ];

export default function BebidaDetailView() {
    const { setCarrito } = useContext(ContextoCarrito)
    return (
        <>
            <h2>Bebidas</h2>
            <Bebida>
            
            {CONSTANTS.map(({id, nombre, imagen, precio}) => (
            <Beber key={id} >
              <img src={imagen} alt="bedida" />
              <input type="checkbox" onChange={(event) => {
                  const activo = event.target.checked;

                  setCarrito((prevState) => {
                  const anterioresBebidas = [...prevState.bebidas]
                  let nuevasBebidas;

                  if (activo){
                      nuevasBebidas = [...anterioresBebidas, {id, nombre, imagen, precio}]
                    } else {
                        nuevasBebidas = anterioresBebidas.filter((item) => {
                            return item.id !== id
                        })
                    }
                    return {
                        ...prevState,
                        bebidas: nuevasBebidas
                    }
                })
              }} />
              <Detalle>{nombre}</Detalle>
              <Detalle>+ ${precio} MXN </Detalle>
            </Beber>
            ))}
    
          </Bebida>
        </>
    )
}

