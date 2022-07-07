import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'; 
import {Link} from 'react-router-dom';

const NavBar = ( ) => {
    return (
        <ul>
           
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mangas'>Mangas</Link></li>
            <li><Link to='/peliculas'>Peliculas</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <div className="cart"><CartWidget value={2}/></div>
        </ul>
    )
}

export default NavBar;