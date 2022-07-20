import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const MovieContainer = () => {

  const [dataMovie, setDataMovie] = useState([])
  const params = useParams()

  const [error, setError] = useState("")
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
        setDataMovie(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, []);

  useEffect(() => {
    if (params?.pelicula) {
      console.log("entra?")
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
      {/* <ItemCount onAdd={onAdd} />
      <ItemCount onAdd={onAdd} /> */}
    </div>
  </>
);
}

export default MovieContainer;