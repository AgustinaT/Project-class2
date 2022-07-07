import React from 'react'
//va a tener TODOS los datos del producto

const ItemDetail = ({product}) => { //estamos obteniendo bien la info?
  return (
    <div className='container-detail'>
        <h4>{product.nombre}</h4>
        <p>{product.descripcion}</p>
        <p>{product.precio}</p>
        <img src={product.imagen} alt="imagen" />

    </div>
  )
}

export default ItemDetail