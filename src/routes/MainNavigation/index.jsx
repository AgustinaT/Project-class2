import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Contacto from '../../components/pages/Contacto';
import Cart from '../../containers/Cart/Cart';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';
import MangaContainer from '../../containers/MangaContainer/MangaContainer';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';
import NotFound from '../../containers/NotFound/NotFound';
import Card from "../../components/Card/Card"

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!!"/>}></Route> 
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
          <Route path="/pelicula/:pelicula" element={<MovieContainer />}></Route>
          <Route path="/manga/:manga" element={<MangaContainer />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default MainNavigation