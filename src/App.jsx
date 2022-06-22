import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar/> 
      <ItemListContainer greeting="Bienvenidos!!"/>
    </div>
  );
}

export default App;
