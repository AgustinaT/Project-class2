import React from 'react';
import { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Shop } from '../../context/ShopContext';

export const CartWidget = () => {
  const {cart} = useContext(Shop);
  return (
    <div>
      <HiShoppingCart size= {18}/> 
      {cart.length && <span>({cart.length})</span>}
      </div>  
  )
    
}
