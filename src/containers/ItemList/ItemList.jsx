import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
 

const ItemList = ({info}) => { //8

  return (
    <div className='Item-list'>
      {info?.map(prod => <Item key={prod.id} prod={prod} /*9*/ ></Item> )}  
      
    </div>

  )
}

export default ItemList