import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo';
import Boton from './forms/Boton';

import "./Nav.css"

function Nav() {

    return (
        <nav className='nav'>
            <ul className='link flex container'>
                <li><Logo></Logo></li>
                <li><Link to="/"><b>Inicio</b></Link></li>
                <li><Link to="/about"><b>Nosotros</b></Link></li>
                <li><Link to="/login"><Boton style="wire">INGRESAR</Boton></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;