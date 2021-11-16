import './itemCount.css';
import { Button } from "react-bootstrap";


const StockContador = ({sumarProducto,value,quitarProducto,onAdd}) => {
    return (
      <div className="containerCount">
          <p className="pCount">{value}</p>
          <Button onClick ={sumarProducto} className="btnCount">+</Button>
          <Button onClick ={quitarProducto} className="btnCount">-</Button>     
          <Button variant="primary" onClick={onAdd}>Añadir al carrito</Button>     
      </div>
    );
  }  
  
  export default StockContador;
    