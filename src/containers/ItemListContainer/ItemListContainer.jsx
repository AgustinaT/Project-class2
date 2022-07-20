import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting}) => { //10
  // const { categoryId } = useParams();
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
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });

        console.log(productos);
        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
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

  console.log(productos);


  const onAdd = (contador) => {
    console.log("Se agrego al carrito");
  };

  return (
    <>
      <div className="item-list-container">
        <h5>{greeting}</h5>

        <div className="item-list-cols">
          <div>
          <ItemList info={productosFiltrados} /*11*//> 
            {/*<ItemCount onAdd={onAdd}/>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
