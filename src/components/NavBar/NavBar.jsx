import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css'; 

const NavBar = ( ) => {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <div className="cart"><CartWidget/></div>
        </ul>
    )
}

export default NavBar;