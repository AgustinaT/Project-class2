import React, { useState } from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import "./Cart.css";
import { useNavigate, Link } from 'react-router-dom';


const Cart = () => {
  const {cart, removeItem, clearCart, TotalPrice, TotalItem, OneTotalPrice} = useContext(Shop);
  console.log(cart);

  const navigate = useNavigate();

  const back = () => {
    navigate("/", {replace:true})
  }
  
  return (
    <>
    {cart.length >= 1 && <div className='carrito-prod'>
    <div className='titulo-limpiar'><h5>Carrito de compras</h5> 
    <button className='btn btn-outline-success' onClick = {() => clearCart () }> Limpiar carrito </button></div>

    {/* {cart.map(producto => {
      return <li key={producto.id}>{producto.nombre } <img src={producto.imagen} width='80px' alt={producto.nombre}></img>
      <span> {producto.quantity}</span>
      <button className='btn btn-outline-success' onClick = {() => removeItem(producto.id) }> Eliminar </button> <br/>
      <p>{producto.precio}</p>
      <div> 
       {OneTotalPrice(producto.precio, producto.quantity)} 
      </div>
      </li>
      })}
      {TotalPrice()}
      <button className="btn btn-outline-success" onClick={() => back ()}>Finaliza tu compra</button> */}

      <table class="table">
          <thead>
            <tr>
              <th scope="col">Tus productos seleccionados</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Suma Productos</th>
              <th scope="col">Imagen </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => (
              <tr>
                <td>{producto.nombre}</td>
                <td>{producto.quantity}</td>
                <td>${producto.precio}</td>
                <td>${OneTotalPrice(producto.precio, producto.quantity)}</td>
                <td><img src={producto.imagen} width='50px' height="70px" alt={producto.nombre}></img>
                </td>
                <td>
                  <button className='btn btn-outline-success' onClick = {() => removeItem(producto.id) }> Eliminar </button></td>
              </tr>
            ))}
          </tbody>
        </table>
<hr/>
<br/>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Total de productos</th>
              <th scope="col">Valor total de la compra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{TotalItem()}</th>
              <td>${TotalPrice()}</td>
              <td>                          
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end"><button className="btn btn-outline-success col-2 " onClick={() => back ()}>Finaliza tu compra</button></div>
        
  </div> } {
    !cart.length >= 1 &&
    <>
      <p>No hay items agregados, regresá</p>
      <button className="btn btn-success" onClick={() => back ()}>Productos</button>
    </>
    
  }
      
    </>
    
  )
}
/*producto.id*/
export default Cart
