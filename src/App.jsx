import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
/*1*/ 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./containers/NotFound/NotFound";
import MovieContainer from "./containers/MovieContainer/MovieContainer";
import MangaContainer from "./containers/MangaContainer/MangaContainer";
import Contacto from "./components/pages/Contacto";

function App() {
  /*2*/
  return (
    <BrowserRouter> {/*Componente principal de la navegacion*/}
      <div className="container">
        <NavBar /> {/*Va afuera de las rutas porque se tiene que rederizar siempre*/}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!!" /*12*//>}></Route> 
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
          <Route path="/pelicula/:pelicula" element={<MovieContainer />}></Route>
          <Route path="/manga/:manga" element={<MangaContainer />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        {/*14*/} 
       {/*3*/} 
      </div>
    </BrowserRouter>
  );
}

export default App;
