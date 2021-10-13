import NavBar from './components/navBar/navBar.js';
import ListContainer from './components/ItemListContainer/ItemListContainer.js';
import Riquelme from './Riquelme.jpg'
import './App.css'

function App() {
  return (
    <><NavBar/>
    <div>
      <ListContainer text="Curso fotografía deportiva" />
      <div className="foto"><img src={Riquelme} alt="" /></div>
      <ListContainer/>
    </div></>
  );
}

export default App;
