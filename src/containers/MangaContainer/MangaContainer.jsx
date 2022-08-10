import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const MangaContainer = () => {

  const [dataManga, setDataManga] = useState([]);
  const params = useParams()

  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {

    const getProductos = async () => {
      try {

        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          productos.push({id: doc.id, ...doc.data()})
        });

        setDataManga(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        alert("Hubo un error:");

      }
    }
    getProductos()
  }, []);


  useEffect(() => {
    if (params?.manga) {
      const productosFiltrados = dataManga.filter(producto => producto.categoria === params.manga)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(dataManga)
    }
  }, [params, dataManga])


return (
  <>
    <div className="item-list-container">
      <h5>Mangas!</h5>

      <div className="item-list-cols">
        <div>
          <ItemList info={productosFiltrados}/> 
        </div>
      </div>
    </div>
  </>
);
}

export default MangaContainer;