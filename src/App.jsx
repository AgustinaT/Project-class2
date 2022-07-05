import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="container">
      <NavBar/> 
      {/* <Hero title=" poner titulo" */ }
      <ItemListContainer greeting="Bienvenidos!!"/>
      <ItemDetailContainer id={2}/> 
    </div>
  );
}

export default App;
