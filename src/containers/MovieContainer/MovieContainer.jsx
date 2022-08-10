import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const MovieContainer = () => {

  const [dataMovie, setDataMovie] = useState([])
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

        setDataMovie(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        alert("Hubo un error:");

      }
    }
    getProductos()
  }, []);

  useEffect(() => {
    if (params?.pelicula) {
      const productosFiltrados = dataMovie.filter(producto => producto.categoria === params.pelicula)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(dataMovie)
    }
  }, [params, dataMovie])


return (
  <>
    <div className="item-list-container">
      <h5>Movies!</h5>

      <div className="item-list-cols">
        <div>
          <ItemList info={productosFiltrados}/> 
        </div>
      </div>
    </div>
  </>
);
}

export default MovieContainer;