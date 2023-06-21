import React from 'react'
import "./Navbar.css"
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Nav'>
            <Link className='logo' to="/"><img  src='https://e7.pngegg.com/pngimages/973/11/png-clipart-phoenix-logo-design-mark-phoenix.png' alt='imagen'/></Link>
            <ul>
                <Link className='li' to="/"> Inicio </Link>
                <Link className='li' to="/Filtrado"> Filtrado </Link>
                <Link className='li' to="/Contacto"> Contacto </Link>
                <Link className='li' to="/Carrito"> <CardWidget/> </Link>
                <Link className='li' to="/Carrito"> Fantasia </Link>
                <Link className='li' to="/Carrito"> Terror </Link>
            </ul>
        </nav>
    )
}

export default Navbar