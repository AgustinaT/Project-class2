import React, { useContext } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
import { Shop } from '../../context/ShopContext'
 

const ItemList = ({info}) => { //8

  const {setEstadoA} = useContext(Shop);

  const handleChangeState = () => {
    setEstadoA("Otro valor")
  }

  return (
    <div className='Item-list'>
      {info?.map(prod => <Item key={prod.id} prod={prod} /*9*/ ></Item> )}  
      <button onClick={handleChangeState}>Cambio del estadoA</button>
    </div>

  )
}

export default ItemList