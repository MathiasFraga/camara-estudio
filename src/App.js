import NavBar from './components/NavBar/navBar';
import ListContainer from './container/ItemListContainer/ItemListContainer';
import './App.css'


function App() {

  return (
   <><NavBar /><div>
      <ListContainer greeting="Cuantos cupos desea para este curso?" />
      </div></>
  );
}
export default App;
