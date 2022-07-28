import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const MangaContainer = () => {

  const [dataManga, setDataManga] = useState([]);
  const params = useParams()

  const [error, setError] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {

    const getProductos = async () => {
      try {

        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });

        console.log(productos);
        setDataManga(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, []);

console.log(dataManga)

  useEffect(() => {
    if (params?.manga) {
      const productosFiltrados = dataManga.filter(producto => producto.categoria === params.manga)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(dataManga)
    }
  }, [params, dataManga])

  console.log(dataManga);

return (
  <>
    <div className="item-list-container">
      <h5>Mangas!</h5>

      <div className="item-list-cols">
        <div>
          <ItemList info={productosFiltrados}/> 
        </div>
      </div>
      {/* <ItemCount onAdd={onAdd} />
      <ItemCount onAdd={onAdd} /> */}
    </div>
  </>
);
}

export default MangaContainer;