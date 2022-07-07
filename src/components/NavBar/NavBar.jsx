import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'; 
import {Link} from 'react-router-dom';
import icono from '../../../src/totoro.jpg'

const NavBar = ( ) => {
    return (
        <ul>
           
            <li><Link to='/'><img src={icono} style={{width:"40px", height:"40px"}} ></img></Link></li>
            <li><Link to='/manga/manga'>Mangas</Link></li>
            <li><Link to='/pelicula/pelicula'>Peliculas</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <div className="cart"><CartWidget value={2}/></div>
        </ul>
    )
}

export default NavBar;