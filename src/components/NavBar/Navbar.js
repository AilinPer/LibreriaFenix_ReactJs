import React from 'react'
import "./Navbar.css"
import CardWidget from '../CardWidget/CardWidget'

const Navbar = () => {
    return (
        <nav className='Nav'>
            <ul>
                <li> <a href='https://www.youtube.com/'>Inicio</a></li>
                <li><a href='https://www.youtube.com/'>Filtrado</a></li>
                <li><a href='https://www.youtube.com/'>Contacto</a></li>
                <li><CardWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar