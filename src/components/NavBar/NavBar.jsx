import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'; 
import { Link } from 'react-router-dom';
import { BsHouse } from "react-icons/bs";
import { useContext } from "react";
import { Shop } from '../../context/ShopContext'

const NavBar = ( ) => {

const {estadoA} = useContext(Shop); /*destructuring con las llaves*/
console.log(estadoA);

    return (
        <ul>
           
            <li><Link to='/'><BsHouse size={16}/></Link></li>
            <li><Link to='/manga/manga'>Mangas</Link></li>
            <li><Link to='/pelicula/pelicula'>Peliculas</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><a href="/#">{estadoA}</a></li>
            <li><Link to='/cart'><CartWidget/></Link></li>
        
            
        </ul>
    )
}

export default NavBar;