import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export const CartWidget = ({value}) => {
  return (
    <div>
      <HiShoppingCart size= {18}/> <span>{value}</span>
      </div>  
  )
    
}
