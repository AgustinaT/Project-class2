import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting}) => {
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()

  useEffect(() => {

    const getProductos = async () => {
      try {

        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          productos.push({id: doc.id, ...doc.data()})
        });

        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        alert("Hubo un error:");

      }
    }
    getProductos()
  }, [])


  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])


  return (
    <>
      <div className="item-list-container">
        <h5>{greeting}</h5>

        <div className="item-list-cols">
          <div>
          <ItemList info={productosFiltrados} /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
