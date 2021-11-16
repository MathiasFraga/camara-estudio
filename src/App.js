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
          <Route exact path="/" element ={<ListContainer greeting="Camara Estudio" />} />
          <Route exact path="/categoria/:categoryID" element ={<ListContainer greeting="Cursos y servicios de Fotografia" />}/>
          <Route exact path="/item/:itemID" element = {<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    );
  }
export default App;
