import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';



const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null)

  const [error, setError] = useState();

  const params = useParams()

  useEffect(() => {
    setTimeout(() => { 
      const getProducts = async () => {
        try {

          const docRef = doc(db, "products", params.productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const productDetail = {id: docSnap.id, ...docSnap.data()}
            setProductDetail(productDetail);
          } else {
            alert("No such document!");
          }


        } 
        catch (e) {
          alert(e.message)
          setError(e.message)
          alert(error)
        }
        
      }
      getProducts();
     }, 2000); 

  }, [params, error])
  

  return (
    <div>
    {productDetail?<ItemDetail product={productDetail}/>:<p>Cargando, no te vayas!...</p>}
    </div>
  )
}

export default ItemDetailContainer