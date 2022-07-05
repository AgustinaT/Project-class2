import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [info, setInfo] = useState([]);

  const products = [
    { id: 1, nombre: "Rottweiler", precio: "$100", descripcion:"El Rottweiler es un perro como un bloque con una cabeza enorme. Las orejas caen ligeramente atadas a la cabeza, colgándoles de alguna manera. El hocico es cuadrado pero fuerte.", imagen: "/perros.jpg" },
    { id: 2, nombre: "Boyero de Berna", precio: "$200", descripcion:"Es un perro muy popular actualmente ya que es un excelente perro familiar.Además de ser un perro muy tranquilo, este can tiene un carácter muy dócil y sociable y también es muy inteligente", imagen: "/perros1.jpg" },
    { id: 3, nombre: "Salchichon", precio: "$300", descripcion:"Se trata de un perro de lomo largo, patas cortas y altura diminuta. Es muy valiente, tenaz y de buena presa, sin que nada le acobarde. Mucho más hábil que los demás perros de caza subterránea", imagen: "/perros2.jpg" },
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
