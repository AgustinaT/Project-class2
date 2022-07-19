// configuracion inicial 
import React, { createContext, useState} from 'react'
import { useEffect } from 'react';

export const Shop = createContext();

const ShopProvider = ({children}) => {
    /*metodos, funciones, state, logica*/

    const [estadoA, setEstadoA] = useState("Valor por defecto");

    const [cart, setCart] = useState([]);

    /*objetos de cart + todas las propiedades del producto + cantidad del producto que viene por parametro*/
    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad);
        const productoRepetido = isInCart(producto);
        console.log(productoRepetido)
        if(productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        }
        else {
            setCart([...cart, {...producto, quantity: cantidad}]) /*en caso de que no tenga productos*/ 
        }
    } 

    const removeItem = (id) => {
        const productosFiltrados = cart.filter(producto => producto.id !== id)
        setCart(productosFiltrados);
    }

    const clearCart = () => {
        setCart([]);
    }

    const OneTotalPrice = (precio, quantity) => {
        return Number((precio * quantity).toFixed(2));
       };
    
       const TotalItem = () => {
        return Number(cart.reduce((acumulador, carrito) => acumulador + carrito.quantity,0));
       }
    
       const TotalPrice = () => {
        return Number(
            cart.reduce(
                (acumulador, itemCart) => (acumulador += itemCart.quantity * itemCart.precio),0
            )
        );
       }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }
        return (
            <Shop.Provider 
            value={{estadoA, setEstadoA, addItem, removeItem, clearCart, TotalPrice, TotalItem, OneTotalPrice, cart}}>
                {children}
            </Shop.Provider>
        )

   
}

export default ShopProvider; 