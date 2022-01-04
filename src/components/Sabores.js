import React from 'react'
import { Detalles } from '../styles/template'

const CONSTANTS = [
    
    {id:1, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores_x5n2iz.png',},
    {id:2, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/mole_vvjx9a.png',},
    {id:3, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores1_l9blic.png',},
    {id:4, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/sabores3_tfpc78.png',},
    {id:5, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/pasas_mxlzry.png',},
    {id:6, sabor: 'https://res.cloudinary.com/dwhhfl68n/image/upload/v1637117155/Protectoguajolotas/detallesguajolotas/guayaba_tkamku.png',},
]

const Sabores = () => {
    return (
        
        
        <Detalles>
        <p>Sabor</p>
            {CONSTANTS.map(({id, sabor}) => (
                
                <div>
                   <img key={id} src= {sabor}></img>
                   </div>
                   
              
            ))}
        </Detalles>
        
    )
}

export default Sabores
