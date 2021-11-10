import React, { useState } from "react";
import { Link } from "react-router-dom";
import './itemDetail.css';
import StockContador from '../ItemCount/itemCount';


const ItemDetails = ({curso}) => {

    const [cupos, setCupos]= useState(1);
    const [flag, setFlag] = useState(true);

    function add() {
      if (cupos > 10) { alert('No hay tantos cupos disponibles para este curso'); }
      else {
        setCupos(cupos + 1);
      }
    }
    const remove = ()=>{
      if (cupos>1){
        setCupos (cupos-1)
      } else {
        alert ('No puedes agregar menos de 1 cupo al carrito!')
      }
    }

    const addToCart = () => {
      setFlag(false);
  }
    
    return (
            <>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={curso.foto} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{curso.title}</h4>
        <p className="card-text text-secondary">
          {curso.description}</p>
        <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(curso.price)}</p>
        {flag 
        ? (<StockContador value={cupos} sumarProducto={add} quitarProducto ={remove} onAdd={addToCart}/>) 
        :( <Link to="/cart"><Button variant="primary" className="addToCart">Añadir al carrito</Button></Link>)}
         </div>
    </div>
 </>
)
}

export default ItemDetails;


