import {useState} from "react";
import NavBar from './components/NavBar/navBar';
import ListContainer from './container/ItemListContainer/ItemListContainer';
import Riquelme from './Riquelme.jpg'
import './App.css'
import StockContador from "./components/ItemCount/itemCount";


function App() {

  const [cupos, setCupos]= useState (1)

  const add = () => {
    if (cupos>10) {alert ('No hay tantos cupos disponibles para este curso')}
  else {
    setCupos (cupos+1)
  }
  }
  const remove = ()=>{
    if (cupos>1){
      setCupos (cupos-1)
    } else {
      alert ('No puedes agregar menos de 1 cupo al carrito!')
    }
  }


  return (
   <><NavBar /><div>
      <ListContainer greeting="Curso fotografía deportiva" />
        <div className="foto"><img src={Riquelme} alt="" /></div>
      <ListContainer />
      <h5 className="hCupos">Cuantos cupos desas para este curso?</h5>
      <StockContador value={cupos} sumarProducto={add} quitarProducto ={remove}/>
    </div></>
  );
}
export default App;
