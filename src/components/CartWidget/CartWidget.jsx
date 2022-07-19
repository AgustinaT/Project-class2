import React from 'react';
import { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Shop } from '../../context/ShopContext';

export const CartWidget = () => {
  const {cart, TotalItem} = useContext(Shop);
  console.log(cart);
  return (
    <>
    {cart.length >=1 && <div>
      <HiShoppingCart size= {18}/> 
      {cart.length && <span>({TotalItem()})</span>}
      </div>}
    </>
    
  )
    
}
