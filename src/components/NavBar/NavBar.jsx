import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'; 
import { Link } from 'react-router-dom';
import { BsHouse } from "react-icons/bs";

const NavBar = ( ) => {
    return (
        <ul>
            <li><Link to='/'><BsHouse size={16}/></Link></li>
            <li><Link to='/manga/manga'>Mangas</Link></li>
            <li><Link to='/pelicula/pelicula'>Peliculas</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to='/cart'><CartWidget/></Link></li>
        </ul>
    )
}

export default NavBar;