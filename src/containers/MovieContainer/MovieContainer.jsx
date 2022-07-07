import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import products from "../../data/data";

const MovieContainer = () => {

  const [dataMovie, setDataMovie] = useState([])

  const {pelicula} = useParams()

  const [error, setError] = useState("")
  
  const task = new Promise ((resolve, reject)=> {
    setTimeout(()=> {
      resolve(products)
    }, 2000);
  });

  const fetchInfo = async () => {
    try {
      let resolve = await task;
      setDataMovie(resolve);

      if (pelicula) {
        const filtrado = resolve.filter((el) => el.categoria === pelicula); 
        setDataMovie(filtrado);
      }
      else {
        setDataMovie(resolve);
      }
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    fetchInfo(); 
  }, [pelicula]);
console.log(dataMovie);

return (
  <>
    <div className="item-list-container">
      <h5>Movies!</h5>

      <div className="item-list-cols">
        <div>
          <ItemList info={dataMovie}/> 
        </div>
      </div>
      {/* <ItemCount onAdd={onAdd} />
      <ItemCount onAdd={onAdd} /> */}
    </div>
  </>
);
}

export default MovieContainer;