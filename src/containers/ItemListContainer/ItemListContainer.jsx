import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [info, setInfo] = useState([]);

  const products = [
    { id: 1, nombre: "Rottweiler", precio: 100, imagen: "/perros.jpg" },
    { id: 2, nombre: "Boyero", precio: 200, imagen: "/perros1.jpg" },
    { id: 3, nombre: "Salchichon", precio: 300, imagen: "/perros2.jpg" },
  ];

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  const fetchInfo = async () => {
    try {
      let resolve = await task;
      setInfo(resolve);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      //lo usamos para hacer llamadas asincronas, el callback que recibe no puede ser asincrono, lo hacemos afuera
      fetchInfo();
    },
    [
      /*se usa para actualizar/modificar */
    ]
  );

  console.log(info);

  const onAdd = (contador) => {
    console.log("Se agrego al carrito");
  };

  return (
    <>
      <div className="item-list-container">
        <h6>{greeting}</h6>

        <div className="item-list-cols">
          <div>
            <ItemList info={info} />
          </div>
        </div>
        {/* <ItemCount onAdd={onAdd} />
        <ItemCount onAdd={onAdd} /> */}
      </div>
    </>
  );
};

export default ItemListContainer;
