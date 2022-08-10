import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';



const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null)
  const [error, setError] = useState("")
  console.log(error)

  const params = useParams()
  console.log(params)

  useEffect(() => {
    setTimeout(() => { 
      const getProducts = async () => {
        try {

          const docRef = doc(db, "products", params.productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log(docSnap.id);
            console.log("Document data:", docSnap.data());
            const productDetail = {id: docSnap.id, ...docSnap.data()}
            setProductDetail(productDetail);
          } else {
            console.log("No such document!");
          }


        } 
        catch (e) {
          console.log(e.message)
          setError(e.message)
        }
      }
      getProducts();
     }, 2000); 

  }, [params])
  

  return (
    <div>
    {productDetail?<ItemDetail product={productDetail}/>:<p>Cargando, no te vayas!...</p>}
    </div>
  )
}

export default ItemDetailContainer