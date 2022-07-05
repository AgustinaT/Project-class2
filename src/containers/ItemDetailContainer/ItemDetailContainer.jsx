import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";

//Queremos obtener datos de un producto especifico (.id?)
const ItemDetailContainer = ({id}) => {

  const [productDetail, setProductDetail] = useState(null) //puede ser un array o objeto dependiendo de la API, pero los detalles suelen ser objetos
  const [error, setError] = useState("")

  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        try {
          const response = await fetch("/products.json") 
          const data = await response.json();
          const result = data.find(product => product.id == id); //simple
          setProductDetail(result)
        } catch (error) {
          console.log(error.message)
          setError(error.message)
        }
      }
      getProducts();
    }, 2000);

    
    

    
    
  }, [])
  

  return (
    <div>
    {productDetail?<ItemDetail product={productDetail}/>:<p>Cargando perritos...</p>}
    
    </div>
  )
}

export default ItemDetailContainer