import './cartWidget.css';
import Carrito from '../img/carrito.png';

const CartWidget= () => {
  return (
    <div className="cartWidget ">
      <img src={Carrito} alt="" className="icon"></img>
      <sup className="cartWidget-number">4</sup>
    </div>
  );
}
  
  export default CartWidget;
  