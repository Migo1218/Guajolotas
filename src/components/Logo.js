import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../images/logo.jpeg'
import {Logotemplate } from '../styles/template'


const Logo = () => {

   

   
    const navegar = useNavigate()

    return (
        <div>
           
            <Logotemplate src={logo} alt="logo" onClick={()=>navegar(`/Guajolotas`)}/>
           
            
        </div>
    )

}

export  default Logo;
