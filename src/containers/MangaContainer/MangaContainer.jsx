import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import products from "../../data/data";

const MangaContainer = () => {

  const [dataManga, setDataManga] = useState([])

  const {manga} = useParams()

  const [error, setError] = useState("")
  
  const task = new Promise ((resolve, reject)=> {
    setTimeout(()=> {
      resolve(products)
    }, 2000);
  });

  const fetchInfo = async () => {
    try {
      let resolve = await task;
      setDataManga(resolve);

      if (manga) {
        const filtrado = resolve.filter((el) => el.categoria === manga); 
        setDataManga(filtrado);
      }
      else {
        setDataManga(resolve);
      }
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    fetchInfo(); 
  }, [manga]);
console.log(dataManga);

return (
  <>
    <div className="item-list-container">
      <h5>Mangas!</h5>

      <div className="item-list-cols">
        <div>
          <ItemList info={dataManga}/> 
        </div>
      </div>
      {/* <ItemCount onAdd={onAdd} />
      <ItemCount onAdd={onAdd} /> */}
    </div>
  </>
);
}

export default MangaContainer;