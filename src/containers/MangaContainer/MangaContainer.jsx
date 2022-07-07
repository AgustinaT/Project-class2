import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

const MangaContainer = () => {
  const [manga, setManga] = useState([])

  const params = useParams()
  console.log(params)

  return ( <h1>hola</h1>
     /*<div>
    {productDetail?<ItemDetail product={productDetail}/>:<p>Cargando mangas, no te vayas!...</p>}
    </div>*/
  )
}

export default MangaContainer