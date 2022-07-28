import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ onAdd, stock}) => {
    const initial = 1;
    console.log(stock)
    // const stock = 7; 
  
    //hook de estado
    const [contador, setContador] = useState(initial);
  
    const addProduct = (num) => {
        setContador(contador + num);
    };
  
    return (
      <div className="count-container">
        <div className="count-container-contador">
          <button
            className="count-container-button"
            onClick={() => addProduct(-1)}
            disabled={contador === initial ? true : null}
          > - </button>

          <span className="count-container__qty">{contador}</span>
          <button
            className="count-container-button"
            onClick={() => addProduct(+1)}
            disabled={contador === stock ? true : null} //puedo poner el alert aca? alert('stock maximo permitido ${stock}')
          > + </button>
        </div>
  
        <button
          className="button-primary"
          onClick={() => {onAdd(contador)}}
          disabled={stock === 0 ? true : null}
        >Añadir al carrito</button> 
      </div>
    );
  };
  
  export default ItemCount;
  