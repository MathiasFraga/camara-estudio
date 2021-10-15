import NavBar from './containers/NavBar/navBar.js';
import ListContainer from './containers/ItemListContainer/ItemListContainer.js';
import Riquelme from './Riquelme.jpg'
import './App.css'

function App() {
  return (
   <><NavBar /><div>
      <ListContainer greeting="Curso fotografía deportiva" />
        <div className="foto"><img src={Riquelme} alt="" /></div>
      <ListContainer />
    </div></>
  );
}
export default App;
