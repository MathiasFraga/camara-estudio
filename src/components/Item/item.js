import { useState } from 'react';
import StockContador from '../ItemCount/itemCount';

const Item = ({id, title, description, price, pictureUrl}) => {

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
            <div className="cardComponent">
                <div className="imgCard">
                    <img src={pictureUrl} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</p>
                <StockContador value={cupos} sumarProducto={add} quitarProducto ={remove}/>
                <div className="addToCart">Añadir al carrito</div>
            </div>
        </>
        )
}

export default Item;


