import React from 'react'
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./ItemDetail.css";
import { useContext } from 'react';
import { Shop } from '../../context/ShopContext'
//va a tener TODOS los datos del producto

const ItemDetail = ({product}) => { 

  const navigate = useNavigate();
  
  const [qtyAdded, setQtyAdded] = useState(0);

  const {addItem} = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty)
  }

  const handleTerminate = () => {
    addItem(product, qtyAdded)
    navigate('/cart')
  }
  console.log(qtyAdded);

  //estamos obteniendo bien la info?
  return (
    <div className='container-detail'>
        <h4>{product.nombre}</h4>
        <p>{product.descripcion}</p>
        <p>{product.precio}</p>
        <img src={product.imagen} alt="imagen"/>
        <>{!qtyAdded ? <ItemCount onAdd ={handleConfirm}/>
        : 
        <button className="btn btn-outline-success" onClick = {handleTerminate}>Finaliza tu compra</button>}</>
        
    </div>
  )
}

export default ItemDetail