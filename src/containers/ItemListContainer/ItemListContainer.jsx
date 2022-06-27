import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (contador) => {
    console.log("Se agrego al carrito")
  }

  return (
    <div>
      <p>{greeting}</p>
      <ItemCount onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer