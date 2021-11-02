import { useState } from 'react';
import './itemDetail.css';
import StockContador from '../ItemCount/ItemCount';


const Card = ({title, description, price, foto}) => {

    const [cupos, setCupos]= useState(1)
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
    
    return (
            <>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={foto} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {description}</p>
        <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
        <StockContador value={cupos} sumarProducto={add} quitarProducto ={remove}/>
        <div className="addToCart">Añadir al carrito</div>
      </div>
    </div>
 </>
        )
}

export default Card;


