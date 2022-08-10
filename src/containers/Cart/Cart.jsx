import React, { useState } from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import CartForm from '../../components/CartForm/CartForm';



const Cart = () => {
  const {cart, removeItem, clearCart, TotalPrice, TotalItem, OneTotalPrice} = useContext(Shop);
  console.log(cart);

  const [view, setView] = useState(false);


const confirmarOrden = () => {
  setView(true);
};

  const navigate = useNavigate();

  const back = () => {
    navigate("/", {replace:true})
  }
  
  return (
    <>
    {(cart.length >= 1 && view === false) && <div className='carrito-prod'>
    <div className='titulo-limpiar'><h5>Carrito de compras</h5> 
    <button className='btn btn-outline-success' onClick = {() => clearCart () }> Limpiar carrito </button></div>


      <table className="table">
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
              <tr key={producto}>
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
        <table className="table">
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
        <div className="d-flex justify-content-end">
        <button className="btn btn-outline-success" onClick={confirmarOrden}>Confirmar compra</button></div>
  </div> }  
  {view === true && <CartForm/>}

  {
    !cart.length >= 1 &&
    <>
      <p>No hay items agregados, regresá</p>
      <button className="btn btn-success" onClick={() => back ()}>Productos</button>
    </>
    
  }
      
    </>
    
  )
}
export default Cart
