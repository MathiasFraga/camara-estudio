import NavBar from './components/NavBar/navBar';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import './App.css'


function App() {

  return (
   <><NavBar /><div>
      <ItemListContainer greeting="Cuantos cupos desea para este curso?" />
      <ItemDetailContainer/>
      </div></>
  );
}
export default App;
