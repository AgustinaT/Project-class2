import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


const MovieContainer = () => {
  /* const [productDetail, setProductDetail] = useState(null) //puede ser un array o objeto dependiendo de la API, pero los detalles suelen ser objetos
  const [error, setError] = useState("")
  console.log(error)

  const params = useParams()
  console.log(params)

  useEffect(() => {
    setTimeout(() => { 
      const getProducts = async () => {
        try {
          const response = await fetch(`/products.json`) 
          const data = await response.json();
          console.log(data)
          const result = data.find(product => product.id == params.productId); //simple
          setProductDetail(result)
        } 
        catch (e) {
          console.log(e.message)
          setError(e.message)
        }
      }
      getProducts();
     }, 2000); 

    
    

    
    
  }, [params])
   */

  return ( <h1>anda?</h1>
     /*<div>
    {productDetail?<ItemDetail product={productDetail}/>:<p>Cargando mangas, no te vayas!...</p>}
    </div>*/
  )
}

export default MovieContainer