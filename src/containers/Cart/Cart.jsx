import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import "./Cart.css";


const Cart = () => {
  const {cart, removeItem, clearCart} = useContext(Shop);
  console.log(cart);

  return (
    <div className='carrito-prod'>
      <div className='titulo-limpiar'><h5>Carrito de compras</h5> 
      <button className='btn btn-outline-success' onClick = {() => clearCart () }> Limpiar carrito </button></div>
      {cart.map(producto => {
        return <li key={producto.id}>{producto.nombre } <img src={producto.imagen} width='80px' alt={producto.nombre}></img>
        <button className='btn btn-outline-success' onClick = {() => removeItem(producto.id) }> Eliminar </button> 
        </li>
        
        })}
    </div>
  )
}
/*producto.id*/
export default Cart
