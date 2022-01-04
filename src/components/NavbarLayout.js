import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from './Banner'
import Busqueda from './Busqueda'
import { Navbar } from './Navbar'

const NavbarLayout = ({component: Component}) => {
    return (
        <>
        <Banner />
      <Busqueda />
            <Navbar />
            <Component />
        </>
    )
}

export default NavbarLayout
