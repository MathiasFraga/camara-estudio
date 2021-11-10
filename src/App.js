import NavBar from './components/NavBar/navBar';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ListContainer from './container/ItemListContainer/ItemListContainer';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/">
              <ListContainer greeting="Camara Estudio" />
          </Route>
          <Route exact path="/categoria/:categoryID">
               <ListContainer greeting="Cursos y servicios de Fotografia" />
          </Route>
          <Route exact path="/item/:itemID">
               <ItemDetailContainer />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
export default App;
