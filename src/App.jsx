import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopProvider from "./context/ShopContext";
import MainNavigation from "./routes/MainNavigation";

function App() {
  return (
  <ShopProvider>
    <MainNavigation/>
  </ShopProvider>
  );
}

export default App;
