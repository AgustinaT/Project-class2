import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting}) => { //10
  const { categoryId } = useParams();
  const [info, setInfo] = useState([]);
  

  const products = [ 
  {id: 1, nombre: "Demon Slayer", precio: "$700", descripcion: "Kimetsu no Yaiba, Guardianes de la noche en España, nos presenta a Kamado Tanjiro, un chico joven, bastante inteligente y con un corazón que no le abe en el pecho. Este vive son su familia y gana dinero vendiendo carbón. Pero todo cambia cuando su familia es atacada y asesinada.", imagen: "/demonSlayer.jpg", categoria:"manga" },

  { id: 2, nombre: "Jujutsu Kaisen", "precio": "$750", descripcion: "Las emociones negativas creadas por los humanos se convierten en maldiciones y se esconden en la vida cotidiana. Estas maldiciones solo pueden ser exorcizadas.", imagen: "/jujutsukaisen1.jpg", categoria:"manga"},

  { id: 3, nombre: "The Promised Neverland", "precio": "$800", descripcion: "The Promised Nerverland es un anime japonés que gira en torno a tres huérfanos (Emma, Norman y Ray) que están esperando a que se les asigne una familia adoptiva. Ellos viven alegres en el orfanato de Grace Field House. Un giro inesperado hace cambiar todo, los chicos se rebelan y luchan al máximo en una tenebrosa aventura.",  imagen: "/the promised neverland.jpg", categoria:"manga"  },

  { id: 4, nombre: "El Viaje de Chihiro", "precio": "$1000", descripcion: "El filme cuenta la historia de una niña de diez años llamada Chihiro, quien durante una mudanza se ve atrapada en un mundo mágico y sobrenatural, teniendo como misión buscar su libertad y la de sus padres, y así poder regresar a su mundo.", imagen: "/chihiro.jpg", categoria:"pelicula"},

  { id: 5, nombre: "Mi vecino Totoro", "precio": "$1000", descripcion: "De qué trata 'Mi vecino Totoro' 'Mi vecino Totoro' cuenta la historia de dos niñas, Satsuki y Mei, que se mudan con su padre a una casa que se encuentra cerca del bosque, mientras su madre está recuperándose de tuberculosis en un sanatorio rural",  imagen: "/totoro.jpg", categoria:"pelicula"} ]
    
  

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  const fetchInfo = async () => {
    try {
      let resolve = await task;
      setInfo(resolve);

      if(categoryId){
        /*Cuando sí solicito una categoría*/
        const filtrado = resolve.filter( el => el.categoryId === categoryId);
        setInfo(filtrado);
    }else{
        /*Cuando no pase una categoria*/
        setInfo(resolve);
    }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      //lo usamos para hacer llamadas asincronas, el callback que recibe no puede ser asincrono, lo hacemos afuera
      fetchInfo();
    },
    [categoryId]
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
            <ItemList info={info} /*11*//> 
            <ItemCount onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
