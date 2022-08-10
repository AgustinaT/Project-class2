import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
 

const ItemList = ({info}) => {
  return (
    <div className='Item-list'>
      {info?.map(prod => <Item key={prod.id} prod={prod}></Item> )}  
    </div>

  )
}

export default ItemList